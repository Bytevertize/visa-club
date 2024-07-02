import { Badge, Button } from '@repo/ui'

export default function Page(): JSX.Element {
    return (
        <main className="flex flex-col items-center justify-between min-h-screen p-24">
            <div className="flex flex-row gap-4">
                <Button variant="ghost">Test</Button>
                <Badge variant="ghost">10!</Badge>
            </div>
        </main>
    )
}
