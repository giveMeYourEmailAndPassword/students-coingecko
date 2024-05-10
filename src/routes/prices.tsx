import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prices')({
  component: () => <div>Hello /prices!</div>
})