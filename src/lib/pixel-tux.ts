// A hand-drawn 24 × 28 pixel sprite shared by the CRT and its static fallback.
export const tuxWidth = 24;
export const tuxHeight = 28;

const palette = {
  black: "#111827",
  white: "#f8fafc",
  shade: "#cbd5e1",
  orange: "#f59e0b",
  yellow: "#facc15",
  outline: "#64748b",
};

function createTuxPixels() {
  const grid: (string | null)[][] = Array.from({ length: tuxHeight }, () => Array(tuxWidth).fill(null));
  const fill = (x: number, y: number, width: number, height: number, color: string) => {
    for (let row = y; row < y + height; row++) {
      for (let col = x; col < x + width; col++) grid[row][col] = color;
    }
  };

  // Stepped silhouette, flippers, and white belly.
  fill(9, 2, 6, 1, palette.black);
  fill(7, 3, 10, 1, palette.black);
  fill(6, 4, 12, 6, palette.black);
  fill(5, 10, 14, 4, palette.black);
  fill(4, 14, 16, 2, palette.black);
  fill(3, 16, 18, 2, palette.black);
  fill(2, 18, 20, 4, palette.black);
  fill(4, 22, 16, 2, palette.black);
  fill(6, 24, 12, 1, palette.black);
  fill(9, 12, 6, 2, palette.white);
  fill(8, 14, 8, 1, palette.white);
  fill(7, 15, 10, 2, palette.white);
  fill(6, 17, 12, 5, palette.white);
  fill(7, 22, 10, 1, palette.white);
  fill(8, 23, 8, 1, palette.shade);
  fill(16, 17, 2, 5, palette.shade);

  // Eyes and beak keep Tux recognizable at the monitor's small display size.
  fill(7, 6, 3, 4, palette.white);
  fill(14, 6, 3, 4, palette.white);
  fill(8, 7, 1, 2, palette.black);
  fill(15, 7, 1, 2, palette.black);
  fill(9, 10, 6, 1, palette.yellow);
  fill(8, 11, 8, 1, palette.orange);
  fill(10, 12, 4, 1, palette.orange);
  fill(3, 23, 6, 1, palette.orange);
  fill(2, 24, 8, 2, palette.orange);
  fill(1, 26, 9, 1, palette.orange);
  fill(15, 23, 6, 1, palette.orange);
  fill(14, 24, 8, 2, palette.orange);
  fill(14, 26, 9, 1, palette.orange);
  fill(3, 24, 5, 1, palette.yellow);
  fill(16, 24, 5, 1, palette.yellow);

  const pixels: { x: number; y: number; color: string }[] = [];
  for (let y = 0; y < tuxHeight; y++) {
    for (let x = 0; x < tuxWidth; x++) {
      const color = grid[y][x];
      const onEdge = !color && [[0, -1], [0, 1], [-1, 0], [1, 0]].some(([dx, dy]) => grid[y + dy]?.[x + dx]);
      if (color || onEdge) pixels.push({ x, y, color: color ?? palette.outline });
    }
  }
  return pixels;
}

export const tuxPixels = createTuxPixels();

export function drawPixelTux(context: CanvasRenderingContext2D, x: number, y: number, scale: number) {
  context.imageSmoothingEnabled = false;
  for (const pixel of tuxPixels) {
    context.fillStyle = pixel.color;
    context.fillRect(x + pixel.x * scale, y + pixel.y * scale, scale, scale);
  }
}
