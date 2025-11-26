import supabase from "../supabase.js";

export async function getRiwayat(req, res) {
  const { data, error } = await supabase
    .from("riwayat_botol")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error });

  res.json(data);
}

export async function createRiwayat(req, res) {
  const { id_user, is_plastic, confidence, image_url } = req.body;

  const { error } = await supabase.from("riwayat_botol").insert([
    {
      id_user,
      is_plastic,
      confidence,
      image_url,
    },
  ]);

  if (error) return res.status(500).json({ error });

  res.json({ message: "Riwayat added" });
}
