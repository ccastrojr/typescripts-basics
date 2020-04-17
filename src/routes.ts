import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Cláudio',
      email: 'claudiocastro@acad.ifma.edu.br',
      password: '123pass',
      techs: [
          'React',
          'React Native',
          { title: 'Node.js', experience: 75 }
      ]
  });

  return response.json(user);
}