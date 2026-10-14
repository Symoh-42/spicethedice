// Stock placeholder imagery from Lorem Picsum, seeded per project/section so
// the same slot always renders the same image. These are stand-ins for real
// production stills and should be swapped for real footage/photos as they
// become available — nothing here claims to depict actual production work.
export function stockImage(seed: string, width = 1600, height = 1200) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
