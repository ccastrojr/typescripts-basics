import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Cláudio',
    email: 'claudiocastro@acad.ifma.edu.br',
    password: '123',
    techs: [
      'React',
      { title: 'Node.js', experience: 60 }
    ]
  });

  return response.json(user);
}