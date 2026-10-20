"use client";

import { useEffect, useRef } from "react";
import { drawPixelTux, tuxPixels, tuxWidth, tuxHeight } from "@/lib/pixel-tux";
import { useLanguage } from "./LanguageProvider";
import styles from "./RetroWorkstation.module.css";

export default function RetroWorkstation() {
  const { t } = useLanguage();
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    let dispose: (() => void) | undefined;

    const initialize = async () => {
      const THREE = await import("three");
      if (cancelled) return;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        return;
      }

      dispose = () => {
        renderer.dispose();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      const viewDirection = new THREE.Vector3(0.52, 0.3, 0.84).normalize();
      const lookAt = new THREE.Vector3(0, 0.15, 0.2);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const computer = new THREE.Group();
      scene.add(computer);
      scene.add(new THREE.AmbientLight(0xffffff, 0.8));
      const light = new THREE.DirectionalLight(0xffffff, 3.2);
      light.position.set(-3, 6, 7);
      light.castShadow = true;
      light.shadow.mapSize.set(1024, 1024);
      light.shadow.camera.left = light.shadow.camera.bottom = -5;
      light.shadow.camera.right = light.shadow.camera.top = 5;
      light.shadow.normalBias = 0.04;
      scene.add(light);
      const rim = new THREE.DirectionalLight(0x608dff, 1.5);
      rim.position.set(4, 2, -3);
      scene.add(rim);

      const shell = new THREE.MeshStandardMaterial({ color: 0xb7bdc7, roughness: 0.85, flatShading: true });
      const side = new THREE.MeshStandardMaterial({ color: 0x727b89, roughness: 0.9, flatShading: true });
      const dark = new THREE.MeshStandardMaterial({ color: 0x15181f, roughness: 0.8 });
      const blue = new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.6 });
      const keyMaterial = new THREE.MeshStandardMaterial({ color: 0xd1d5db, roughness: 0.9 });
      const outline = new THREE.LineBasicMaterial({ color: 0x101216 });
      const geometries = new Set<InstanceType<typeof THREE.BufferGeometry>>();
      const materials = new Set<InstanceType<typeof THREE.Material>>([shell, side, dark, blue, keyMaterial, outline]);

      const beveledBox = (width: number, height: number, depth: number, bevel: number) => {
        const shape = new THREE.Shape();
        const x = width / 2 - bevel;
        const y = height / 2 - bevel;
        shape.moveTo(-x, -y);
        shape.lineTo(x, -y);
        shape.lineTo(x, y);
        shape.lineTo(-x, y);
        shape.closePath();
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth: depth - bevel * 2, bevelEnabled: true,
          bevelThickness: bevel, bevelSize: bevel, bevelSegments: 1, steps: 1,
        });
        geometry.center();
        return geometry;
      };

      const box = (width: number, height: number, depth: number, x: number, y: number, z: number, material = shell, edges = true, bevel = 0) => {
        const geometry = bevel ? beveledBox(width, height, depth, bevel) : new THREE.BoxGeometry(width, height, depth);
        geometries.add(geometry);
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (edges) {
          const edgeGeometry = new THREE.EdgesGeometry(geometry);
          geometries.add(edgeGeometry);
          mesh.add(new THREE.LineSegments(edgeGeometry, outline));
        }
        computer.add(mesh);
        return mesh;
      };

      // Chunky CRT casing, inset display, stand, and desktop base.
      box(3.5, 2.65, 2.7, 0, 1.05, -0.65, side, true, 0.12);

      // A hollow beveled bezel leaves the curved CRT glass recessed inside.
      const bezelShape = new THREE.Shape();
      bezelShape.moveTo(-1.77, -1.32);
      bezelShape.lineTo(1.77, -1.32);
      bezelShape.lineTo(1.77, 1.32);
      bezelShape.lineTo(-1.77, 1.32);
      bezelShape.closePath();
      const opening = new THREE.Path();
      opening.moveTo(-1.58, -0.95);
      opening.lineTo(-1.58, 1.17);
      opening.lineTo(1.58, 1.17);
      opening.lineTo(1.58, -0.95);
      opening.closePath();
      bezelShape.holes.push(opening);
      const bezelGeometry = new THREE.ExtrudeGeometry(bezelShape, {
        depth: 0.26, bevelEnabled: true, bevelThickness: 0.08,
        bevelSize: 0.08, bevelSegments: 1, steps: 1,
      });
      geometries.add(bezelGeometry);
      const bezel = new THREE.Mesh(bezelGeometry, shell);
      bezel.position.set(0, 1.05, 0.72);
      bezel.castShadow = true;
      bezel.receiveShadow = true;
      computer.add(bezel);
      const bezelEdges = new THREE.EdgesGeometry(bezelGeometry, 35);
      geometries.add(bezelEdges);
      bezel.add(new THREE.LineSegments(bezelEdges, outline));
      box(3.16, 2.14, 0.1, 0, 1.16, 0.75, dark);
      for (let i = 0; i < 7; i++) {
        box(0.035, 0.8, 0.11, 1.755, 1.18, -1.35 + i * 0.2, dark, false);
      }
      box(0.65, 0.6, 0.65, 0, -0.63, -0.05, side);
      box(1.9, 0.18, 1.15, 0, -0.98, 0.1);
      box(4.5, 0.48, 2.2, 0, -1.3, 0.12, shell, true, 0.06);
      box(1.2, 0.12, 0.06, -1.1, -1.25, 1.25, dark);
      box(0.3, 0.18, 0.08, 1.65, -1.27, 1.27, blue);
      box(0.13, 0.1, 0.06, 1.42, -0.12, 1.035, blue);
      for (let i = 0; i < 5; i++) box(0.22, 0.035, 0.04, -1.35 + i * 0.3, -0.12, 1.025, dark, false);

      // The keyboard is built from low-poly geometry, with a blue space bar.
      box(3.8, 0.18, 1.35, 0, -1.72, 1.85, side, true, 0.04);
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 10; col++) {
          box(0.27, 0.1, 0.24, -1.53 + col * 0.34, -1.57, 1.4 + row * 0.31, col === 9 ? blue : keyMaterial);
        }
      }
      box(1.8, 0.1, 0.2, -0.08, -1.57, 2.34, blue);

      const screenCanvas = document.createElement("canvas");
      screenCanvas.width = 512;
      screenCanvas.height = 336;
      const context = screenCanvas.getContext("2d");
      if (context) {
        context.fillStyle = "#080f1f";
        context.fillRect(0, 0, 512, 336);
        context.fillStyle = "#2563eb";
        context.fillRect(0, 0, 512, 42);
        context.font = "bold 19px monospace";
        context.fillStyle = "#ffffff";
        context.fillText("MARIO.DEV", 20, 28);
        context.fillText("_  □  ×", 394, 28);
        drawPixelTux(context, 160, 56, 8);
        context.font = "bold 18px monospace";
        context.fillStyle = "#d1d5db";
        context.fillText("> hello, linux_", 170, 315);
        context.fillStyle = "rgba(0,0,0,0.15)";
        for (let y = 0; y < 336; y += 4) context.fillRect(0, y, 512, 1);
      }
      const texture = new THREE.CanvasTexture(screenCanvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.magFilter = THREE.NearestFilter;
      const screenMaterial = new THREE.MeshPhysicalMaterial({
        map: texture, emissive: 0xffffff, emissiveMap: texture,
        emissiveIntensity: 0.65, roughness: 0.22, metalness: 0.05,
        clearcoat: 1, clearcoatRoughness: 0.12,
      });
      materials.add(screenMaterial);
      const screenGeometry = new THREE.PlaneGeometry(3, 2, 20, 16);
      const positions = screenGeometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i) / 1.5;
        const y = positions.getY(i);
        positions.setZ(i, 0.09 * (1 - x * x) * (1 - y * y));
      }
      screenGeometry.computeVertexNormals();
      geometries.add(screenGeometry);
      const screen = new THREE.Mesh(screenGeometry, screenMaterial);
      screen.position.set(0, 1.16, 0.82);
      computer.add(screen);

      const groundGeometry = new THREE.PlaneGeometry(7, 7);
      const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.4 });
      geometries.add(groundGeometry);
      materials.add(groundMaterial);
      const ground = new THREE.Mesh(groundGeometry, groundMaterial);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -1.88;
      ground.receiveShadow = true;
      scene.add(ground);

      const grid = new THREE.GridHelper(7, 14, 0x4b5563, 0x262b35);
      grid.position.y = -1.875;
      scene.add(grid);
      geometries.add(grid.geometry);
      (Array.isArray(grid.material) ? grid.material : [grid.material]).forEach(material => materials.add(material));

      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const pointer = { x: 0, y: 0 };
      let inView = false;
      let frame = 0;
      const startedAt = performance.now();
      const render = (now: number) => {
        frame = 0;
        if (cancelled) return;
        const seconds = (now - startedAt) / 1000;
        const yaw = motion.matches ? 0 : pointer.x * 0.45 + Math.sin(seconds * 0.55) * 0.18;
        const pitch = motion.matches ? 0 : pointer.y * 0.16 + Math.sin(seconds * 0.4) * 0.025;
        computer.rotation.y += (yaw - computer.rotation.y) * 0.08;
        computer.rotation.x += (pitch - computer.rotation.x) * 0.08;
        computer.position.y = motion.matches ? 0 : Math.sin(seconds * 1.2) * 0.045;
        renderer.render(scene, camera);
        if (inView && !document.hidden && !motion.matches) frame = requestAnimationFrame(render);
      };
      const requestRender = () => {
        if (!frame && !cancelled) frame = requestAnimationFrame(render);
      };
      const resize = () => {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height) return;
        const aspect = width / height;
        const distance = Math.max(10.6, 3.4 / (Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * Math.min(aspect, 1)));
        camera.aspect = aspect;
        camera.position.copy(viewDirection).multiplyScalar(distance).add(lookAt);
        camera.lookAt(lookAt);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        requestRender();
      };
      const move = (event: PointerEvent) => {
        if (motion.matches || event.pointerType === "touch") return;
        const rect = host.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      const reset = () => { pointer.x = 0; pointer.y = 0; };
      const syncAnimation = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        if (!document.hidden && inView) requestRender();
      };
      const observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        syncAnimation();
      });
      const resizeObserver = new ResizeObserver(resize);
      observer.observe(host);
      resizeObserver.observe(host);
      host.addEventListener("pointermove", move);
      host.addEventListener("pointerleave", reset);
      motion.addEventListener("change", syncAnimation);
      document.addEventListener("visibilitychange", syncAnimation);
      resize();
      host.dataset.ready = "true";

      dispose = () => {
        if (frame) cancelAnimationFrame(frame);
        observer.disconnect();
        resizeObserver.disconnect();
        host.removeEventListener("pointermove", move);
        host.removeEventListener("pointerleave", reset);
        motion.removeEventListener("change", syncAnimation);
        document.removeEventListener("visibilitychange", syncAnimation);
        geometries.forEach(geometry => geometry.dispose());
        materials.forEach(material => material.dispose());
        texture.dispose();
        light.shadow.dispose();
        renderer.dispose();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
      if (cancelled) dispose();
    };

    void initialize().catch(() => { dispose?.(); });
    return () => { cancelled = true; dispose?.(); };
  }, []);

  return (
    <div className={styles.workstation}>
      <div ref={hostRef} className={styles.scene} role="img" aria-label={t("Gently rotating 3D retro computer displaying Tux, the Linux penguin, in pixel art", "Computador retro 3D con rotación suave y Tux, el pingüino de Linux, en píxeles")}>
        <div className={styles.fallback} aria-hidden="true">
          <div className={styles.fallbackScreen}><span>MARIO.DEV</span><svg viewBox={`0 0 ${tuxWidth} ${tuxHeight}`} width="96" height="112" className={styles.pixelTux} shapeRendering="crispEdges">
            {tuxPixels.map(({ x, y, color }) => <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={color} />)}
          </svg><small>&gt; hello, linux_</small></div>
          <div className={styles.fallbackStand} />
          <div className={styles.fallbackKeyboard} />
        </div>
      </div>
      {/* <p className={styles.caption}><span aria-hidden="true">+</span> {t("A small workspace. Big ideas.", "Un pequeño espacio. Grandes ideas.")}</p> */}

    </div>
  );
}
