import { Request, Response } from "express";
import * as admin from 'firebase-admin'

export async function create(req: Request, res: Response) {
  try {
    const { password, email, role } = req.body

    if (!password || !email || !role) {
      return res.status(400).send({ message: 'Missing fields' })
    }

    const { uid } = await admin.auth().createUser({
      password,
      email
    })
    admin.auth().updateUser(uid, { emailVerified: true })
    await admin.auth().setCustomUserClaims(uid, { role })

    return res.status(201).send({ uid })
  } catch (err) {
    return handleError(res, err)
  }
}

function mapUser(user: admin.auth.UserRecord) {
  const customClaims = (user.customClaims || { role: '' }) as { role?: string }
  const role = customClaims.role ? customClaims.role : ''
  return {
    uid: user.uid,
    email: user.email || '',
    displayName: user.displayName || '',
    role,
    lastSignInTime: user.metadata.lastSignInTime,
    creationTime: user.metadata.creationTime
  }
}

export async function get(req: Request, res: Response) {
  try {
    const id:string = req.query['id'] as string;
    const user = await admin.auth().getUser(id)
    return res.status(200).send({ user: mapUser(user) })
  } catch (err) {
    return handleError(res, err)
  }
}

function handleError(res: Response, err: any) {
  return res.status(500).send({ message: `${err.code} - ${err.message}` });
}

export async function roleCheck(req: Request, res: Response) {
  return res.status(200).send({ message: 'Authorized' })
}