import { getLocalTimeZone, now, today } from "@internationalized/date"
import {
  AlertDialog,
  Button,
  Calendar,
  Checkbox,
  ComboBox,
  DateField,
  DatePicker,
  DateRangePicker,
  Input,
  Item,
  MenuButton,
  Modal,
  RangeCalendar,
  SearchAutocomplete,
  Section,
  Select,
  TimeField,
} from "../components"
import { Tabs } from "../components/Tabs/Tabs"
import { useOverlayTriggerState } from "react-stately"
import Head from "next/head"
import { PageNav } from "@/meta/components"

export function KitchenSinkPage() {
  let state = useOverlayTriggerState({})

  const links = [
    "checkbox",
    "input",
    "tabs",
    "combobox",
    "select",
    "search",
    "menu",
    "date-time",
    "calendar",
    "modal",
  ]
  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <div className="min-h-screen">
        <PageNav />
        <main className="px-8 pb-20">
          <div className="pt-20" id="checkbox">
            <h1 className="text-3xl font-bold">Checkbox</h1>
            <Checkbox>Test</Checkbox>
          </div>
          <div className="pt-20" id="input">
            <h1 className="text-3xl font-bold">Input</h1>
            <section className="underline underline-offset-4 uppercase text-sm text-gray-500 hidden md:grid grid-cols-3 gap-y-8 items-end">
              <span>default</span>
              <span>default disabled</span>
              <span>inline</span>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-y-8 items-end">
              <Input
                label="Label"
                placeholder="Placeholder"
                validationState="valid"
                errorMessage="error text"
              />
              <Input
                label="Label"
                placeholder="Placeholder"
                validationState="valid"
                errorMessage="error text"
                isDisabled
              />
              <Input
                inline
                label="Label"
                placeholder="Placeholder"
                validationState="valid"
                errorMessage="error text"
              />
              <Input
                label="Label"
                placeholder="Placeholder"
                validationState="invalid"
                errorMessage="error text"
              />
              <Input
                label="Label"
                placeholder="Placeholder"
                validationState="invalid"
                errorMessage="error text"
                isDisabled
              />
              <Input
                inline
                label="Label"
                placeholder="Placeholder"
                validationState="invalid"
                errorMessage="error text"
              />
            </section>
          </div>
          <div className="pt-20" id="tabs">
            <h1 className="text-3xl font-bold">Tabs</h1>
            <Tabs aria-label="History of Ancient Rome">
              <Item key="FoR" title="Founding of Rome">
                Arma virumque cano, Troiae qui primus ab oris.
              </Item>
              <Item key="MaR" title="Monarchy and Republic">
                Senatus Populusque Romanus.
              </Item>
              <Item key="Emp" title="Empire">
                Alea jacta est.
              </Item>
            </Tabs>
            <Tabs orientation="vertical" aria-label="History of Ancient Rome">
              <Item key="FoR" title="Founding of Rome">
                Arma virumque cano, Troiae qui primus ab oris.
              </Item>
              <Item key="MaR" title="Monarchy and Republic">
                Senatus Populusque Romanus.
              </Item>
              <Item key="Emp" title="Empire">
                Alea jacta est.
              </Item>
            </Tabs>
          </div>
          <div className="pt-20" id="combobox">
            <h1 className="text-3xl font-bold">Combobox</h1>
            <ComboBox label="Favorite Animal">
              <Item key="red panda">Red Panda</Item>
              <Item key="cat">Cat</Item>
              <Item key="dog">Dog</Item>
              <Item key="aardvark">Aardvark</Item>
              <Item key="kangaroo">Kangaroo</Item>
              <Item key="snake">Snake</Item>
            </ComboBox>
          </div>
          <div className="pt-20" id="select">
            <h1 className="text-3xl font-bold">Select</h1>
            <Select label="Favorite Animal">
              <Item key="red panda">Red Panda</Item>
              <Item key="cat">Cat</Item>
              <Item key="dog">Dog</Item>
              <Item key="aardvark">Aardvark</Item>
              <Item key="kangaroo">Kangaroo</Item>
              <Item key="snake">Snake</Item>
            </Select>
          </div>
          <div className="pt-20" id="search">
            <h1 className="text-3xl font-bold">Search Autocomplete</h1>
            <SearchAutocomplete label="Search" allowsCustomValue>
              <Section title="Companies">
                <Item>Chatterbridge</Item>
                <Item>Tagchat</Item>
                <Item>Yambee</Item>
                <Item>Photobug</Item>
                <Item>Livepath</Item>
              </Section>
            </SearchAutocomplete>
          </div>
          <div className="pt-20" id="menu">
            <h1 className="text-3xl font-bold">Menu</h1>
            <MenuButton label="Actions" onAction={(key) => alert(key)}>
              <Section>
                <Item key="edit">Edit…</Item>
                <Item key="duplicate">Duplicate</Item>
              </Section>
              <Section>
                <Item key="move">Move…</Item>
                <Item key="rename">Rename…</Item>
              </Section>
              <Section>
                <Item key="archive">Archive</Item>
                <Item key="delete">Delete…</Item>
              </Section>
            </MenuButton>
          </div>

          <div className="pt-20" id="date-time">
            <h1 className="text-3xl font-bold">Date-Time field</h1>
            <section className="underline underline-offset-4 uppercase text-sm text-gray-500 hidden md:grid grid-cols-3 gap-y-8 items-end">
              <span>Date</span>
              <span>Date-time</span>
              <span>Time</span>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-y-8 items-end ">
              <div className="max-w-fit rounded flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors pl-2 pr-8 py-2 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600">
                <DateField label="Appointment date" />
              </div>
              <div className="max-w-fit rounded flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors pl-2 pr-8 py-2 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600">
                <DateField
                  label="Appointment date and time"
                  placeholderValue={now(getLocalTimeZone())}
                />
              </div>
              <TimeField label="Appointment time" />
            </section>
          </div>
          <div className="pt-20" id="calendar">
            <h1 className="text-3xl font-bold">Calendar</h1>
            <section className="underline underline-offset-4 uppercase text-sm text-gray-500 hidden md:grid grid-cols-2 gap-y-8 items-end">
              <span>Default</span>
              <span>Range</span>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 items-start">
              <Calendar
                minValue={today(getLocalTimeZone())}
                defaultValue={today(getLocalTimeZone())}
              />
              <RangeCalendar
                minValue={today(getLocalTimeZone())}
                defaultValue={{
                  start: today(getLocalTimeZone()),
                  end: today(getLocalTimeZone()).add({ weeks: 2 }),
                }}
              />
            </section>
          </div>
          <div className="pt-20" id="date-picker">
            <h1 className="text-3xl font-bold">Date Picker</h1>
            <section className="underline underline-offset-4 uppercase text-sm text-gray-500 hidden md:grid grid-cols-2 gap-y-8 items-end">
              <span>Single</span>
              <span>Range</span>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-y-8 items-start">
              <DatePicker
                label="Appointment date"
                minValue={today(getLocalTimeZone())}
              />
              <DateRangePicker
                label="Trip dates"
                minValue={today(getLocalTimeZone())}
              />
            </section>
          </div>
          <div className="pt-20" id="modal">
            <h1 className="text-3xl font-bold">Modal</h1>
            <div className="">
              <Button onPress={state.open}>Open Modal</Button>
              <Modal state={state}>
                <AlertDialog
                  title="Delete folder"
                  confirmLabel="Confirm"
                  variant="destructive"
                  onClose={state.close}
                >
                  Modal Text will be here
                </AlertDialog>
              </Modal>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
