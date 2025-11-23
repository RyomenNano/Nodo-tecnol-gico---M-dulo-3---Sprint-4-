import { body, param } from 'express-validator';

export function TransformarCampos(req, res, next) {
  if (typeof req.body.poderes === "string") {
    req.body.poderes = req.body.poderes
      .split(",")
      .map(x => x.trim());
  }

    if (typeof req.body.aliados === "string") {
    req.body.aliados = req.body.aliados
      .split(",")
      .map(x => x.trim());
  }

    if (typeof req.body.enemigos === "string") {
    req.body.enemigos = req.body.enemigos
      .split(",")
      .map(x => x.trim());
  }

  next();
}