import supabase  from "../supabase.js";

// GET all users
export const getUsers = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .order("createdAt", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

export const getUserByNim = async (req, res) => {
  try {
    const user = await User.findOne({ nim: req.params.nim });

    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create new user
export const createUser = async (req, res) => {
  const { nim, nama, role } = req.body;

  const { data, error } = await supabase
    .from("users")
    .insert([{ nim, nama, role }])
    .select();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

// UPDATE user
export const updateUser = async (req, res) => {
  try {
    const { nim } = req.params; // nim lama
    const { nama, role, nim: newNim } = req.body;

    const updatedUser = await prisma.users.update({
      where: { nim },
      data: {
        nim: newNim,
        nama,
        role
      }
    });

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Gagal update data" });
  }
};


// DELETE user
export const deleteUser = async (req, res) => {
  const { nim } = req.params;

  const { error } = await supabase
    .from("users")
    .delete()
    .eq("nim", nim);

  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "User deleted" });
};

