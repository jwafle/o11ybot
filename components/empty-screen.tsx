import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Query for services',
    message: `List 10 services at random.`
  },
  {
    heading: 'Show request latency',
    message:
      'Show me the average HTTP request latency of <your service here> for the past 10 minutes.'
  },
  {
    heading: 'Find related services',
    message: `What services does <your service here> make HTTP requests to?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to o11ybot!</h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This is an open source AI chatbot built to query{' '}
          <ExternalLink href="https://opentelemetry.io">
            OpenTelemetry
          </ExternalLink>{' '}
          data from{' '}
          <ExternalLink href="https://clickhouse.com/">Clickhouse</ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
