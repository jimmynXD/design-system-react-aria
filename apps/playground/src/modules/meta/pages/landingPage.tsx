import { Button } from "@/ui"
import { useRouter } from "next/router"

export function LandingPage() {
  const routes = [
    {
      label: "Kitchen Sink",
      path: "/kitchen-sink",
    },
    {
      label: "Form",
      path: "/components/form",
    },
    {
      label: "Calendar",
      path: "/components/calendar",
    },
    {
      label: "Date Field",
      path: "/components/date-field",
    },
    {
      label: "Date Picker",
      path: "/components/date-picker",
    },
    {
      label: "Dropdowns",
      path: "/components/drop",
    },
    {
      label: "Modal",
      path: "/components/modal",
    },
  ]
  const router = useRouter()
  return (
    <main className="flex flex-wrap p-4 lg:px-8">
      {routes.map((route, index) => (
        <section key={index} className="pr-4 pb-4 last:pr-0">
          <Button onPress={() => router.push(route.path)}>{route.label}</Button>
        </section>
      ))}
    </main>
  )
}
