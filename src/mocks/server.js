// src/mocks/server.js
import { rest } from 'msw';

import { setupServer } from 'msw/node'

export const server = setupServer(
    rest.get(
        '/foo',
        (request, response, context) => {
            return response(
                context.status(200),
                context.set('DEMOZAC', "WORKS HEader"),
                context.body("Works now"),
                context.text("WPDDL"),
                context.json([
                    {
                        id: 1,
                        title: 'First post',
                        body: 'This is the first post',
                    },
                    {
                        id: 2,
                        title: 'Second post',
                        body: 'This is the second post',
                    },
                ]),
            );
        },
    ),
);