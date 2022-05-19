import { Request, Response } from "express";
import userRetrieveService from "../../services/user/userRetrieve.service";

const userRetrieveController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userRetrieveService(id);

    return res.status(200).json(user).send();
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};

export default userRetrieveController;
