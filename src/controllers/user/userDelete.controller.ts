import { Request, Response } from "express";
import userDeleteService from "../../services/user/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await userDeleteService(id);

    return res.status(204).send();
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export default userDeleteController;
