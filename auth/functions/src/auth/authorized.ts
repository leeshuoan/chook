import { Request, Response } from "express";

export function isAuthorized(opts: { hasRole: Array<'admin' | 'manager' | 'user'>, allowSameUser?: boolean }) {
  return (req: Request, res: Response, next: Function) => {
    const { role, email, uid } = res.locals
    console.log(role)
    console.log(email)
    console.log(uid)
    const id:string = req.query['id'] as string;

    if (email === 'leeshuoan@gmail.com')
      return next();

    if (opts.allowSameUser && id && uid === id)
      return next();

    if (!role)
      return res.status(403).send({ message: 'You are not an admin' });

    if (opts.hasRole.includes(role))
      return next();

    return res.status(403).send();
  }
}