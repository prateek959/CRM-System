import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createLead = async (req, res) => {
  const { name,email, status } = req.body;
  const userId = req.user.id;

  try {
    const lead = await prisma.lead.create({
      data: { name,email, status, userId },
    });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await prisma.lead.findMany({
      where: { userId: req.user.id },
    });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
