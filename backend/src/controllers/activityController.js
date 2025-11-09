import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const addActivity = async (req, res) => {
  const { note } = req.body;
  const userId = req.user.id;

  try {
    const activity = await prisma.activity.create({
      data: { note, userId  },
    });
    res.json(activity);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getActivities = async (req, res) => {
  try {
    const activities = await prisma.activity.findMany({
      where: { userId: req.user.id },
    });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
