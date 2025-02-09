import { Request, Response } from "express";

export async function listProducts(req: Request, res: Response) {
  try {
    res.json("Hello products!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    res.json("Hello products!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function createProduct(req: Request, res: Response) {
  try {
    console.log(req.body);
    res.json(req.body);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    res.json("Hello products!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    res.json("Hello products!");
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
}
