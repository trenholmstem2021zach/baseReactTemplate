import { rest } from 'msw'

const firebasePath = '/demo'

export const fetchTasks_incompleteTask_response = rest.get(firebasePath, async (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json([
            {
                id: '1',
                name: 'Finish course',
                createdOn: Date.now(),
                status: TaskStatus.INCOMPLETE,
            },
        ])
    )
})
