// ignore react/jsx-key for entire page
/* eslint-disable react/jsx-key */
import { getLocalTimeZone, now, today } from "@internationalized/date"
import {
  AlertDialog,
  Button,
  Calendar,
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
  Tabs,
  TimeField,
} from "../pulled"
import { useOverlayTriggerState } from "react-stately"
import { Tabs as TabsNav } from "../pulled/Tabs/TabsNav"
import Head from "next/head"
import { PageNav } from "@/meta/components"

export function PulledPage() {
  const state = useOverlayTriggerState({})

  const pickerArray = [
    <DatePicker
      label="Appointment date"
      minValue={today(getLocalTimeZone())}
    />,
    <DateRangePicker label="Trip dates" minValue={today(getLocalTimeZone())} />,
  ]
  const calendarArray = [
    <Calendar
      minValue={today(getLocalTimeZone())}
      defaultValue={today(getLocalTimeZone())}
    />,
    <RangeCalendar
      minValue={today(getLocalTimeZone())}
      defaultValue={{
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 2 }),
      }}
    />,
  ]

  const dateFieldArray = [
    <div className="max-w-fit rounded flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors pl-2 pr-8 py-2 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600">
      <DateField label="Appointment date" />
    </div>,
    <div>
      <TimeField label="Appointment time" />
    </div>,
    <div className="max-w-fit rounded flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors pl-2 pr-8 py-2 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600">
      <DateField
        label="Appointment date and time"
        placeholderValue={now(getLocalTimeZone())}
      />
    </div>,
  ]

  const inputArray = [
    <Input
      label="Label"
      placeholder="Placeholder"
      validationState="valid"
      errorMessage="error text"
    />,
    <Input
      label="Label"
      placeholder="Placeholder"
      validationState="invalid"
      errorMessage="error text"
    />,
    <Input
      label="Label"
      placeholder="Placeholder"
      validationState="valid"
      errorMessage="error text"
      isDisabled
    />,
    <Input
      label="Label"
      placeholder="Placeholder"
      validationState="invalid"
      errorMessage="error text"
      isDisabled
    />,
    <Input
      inline
      label="Label"
      placeholder="Placeholder"
      validationState="valid"
      errorMessage="error text"
    />,
    <Input
      inline
      isDisabled
      label="Label"
      placeholder="Placeholder"
      validationState="valid"
      errorMessage="error text"
    />,
    <Input
      inline
      isDisabled
      label="Label"
      placeholder="Placeholder"
      validationState="invalid"
      errorMessage="error text"
    />,
    <Input
      inline
      label="Label"
      placeholder="Placeholder"
      validationState="invalid"
      errorMessage="error text"
    />,
  ]

  return (
    <>
      <Head>
        <title>Playground</title>
      </Head>
      <main className="min-h-screen flex flex-col lg:max-w-7xl">
        <PageNav />
        <div className="mt-16 h-[calc(100vh_-_5rem)]">
          <TabsNav
            orientation="vertical"
            aria-label="Components"
            className="h-full mt-4"
          >
            <Item key={"input"} title={"Input"}>
              <SectionHeader title={"Input"} />
              <section className="pt-12 flex flex-wrap">
                {inputArray.map((item, index) => (
                  <div key={index} className="pr-8 pb-8 space-y-2">
                    {item}
                  </div>
                ))}
              </section>
            </Item>
            <Item key={"datetime"} title={"Date Time"}>
              <SectionHeader title={"Date Time"} />
              <section className="pt-12 flex flex-wrap items-end">
                {dateFieldArray.map((item, index) => (
                  <div key={index} className="pr-8 pb-8  space-y-2">
                    {item}
                  </div>
                ))}
              </section>
            </Item>
            <Item key={"calendar"} title={"Calendar"}>
              <SectionHeader title={"Calendar"} />
              <section className="pt-12 flex flex-wrap items-end">
                {calendarArray.map((item, index) => (
                  <div key={index} className="pr-8 pb-8  space-y-2">
                    {item}
                  </div>
                ))}
              </section>
            </Item>
            <Item key={"picker"} title={"Date Picker"}>
              <SectionHeader title={"Date Picker"} />
              <section className="pt-12 flex flex-wrap items-end">
                {pickerArray.map((item, index) => (
                  <div key={index} className="pr-8 pb-8  space-y-2">
                    {item}
                  </div>
                ))}
              </section>
            </Item>
            <Item key={"tabs"} title={"Tabs"}>
              <div className="flex flex-col">
                <SectionHeader title={"Tabs"} />
                <div className="p-4 shadow-lg">
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
                </div>
                <div className="mt-4 p-4 shadow-lg">
                  <Tabs
                    orientation="vertical"
                    aria-label="History of Ancient Rome"
                  >
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
              </div>
            </Item>
            <Item key={"combobox"} title={"Combobox"}>
              <SectionHeader title={"Combobox"} />
              <section className="pt-12 flex flex-wrap">
                <div className="pr-8 pb-8 last:pb-0 space-y-2">
                  <ComboBox label="Favorite Animal">
                    <Item key="red panda">Red Panda</Item>
                    <Item key="cat">Cat</Item>
                    <Item key="dog">Dog</Item>
                    <Item key="aardvark">Aardvark</Item>
                    <Item key="kangaroo">Kangaroo</Item>
                    <Item key="snake">Snake</Item>
                  </ComboBox>
                </div>
              </section>
            </Item>
            <Item key={"select"} title={"Select"}>
              <SectionHeader title={"Select"} />
              <section className="pt-12 flex flex-wrap">
                <div className="pr-8 pb-8 last:pb-0 space-y-2">
                  <Select label="Favorite Animal">
                    <Item key="red panda">Red Panda</Item>
                    <Item key="cat">Cat</Item>
                    <Item key="dog">Dog</Item>
                    <Item key="aardvark">Aardvark</Item>
                    <Item key="kangaroo">Kangaroo</Item>
                    <Item key="snake">Snake</Item>
                  </Select>
                </div>
              </section>
            </Item>
            <Item key={"search"} title={"Search"}>
              <SectionHeader title={"Search"} />
              <section className="pt-12 flex flex-wrap">
                <div className="pr-8 pb-8 last:pb-0 space-y-2">
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
              </section>
            </Item>
            <Item key={"menu"} title={"Menu"}>
              <SectionHeader title={"Menu"} />
              <section className="pt-12 flex flex-wrap">
                <div className="pr-8 pb-8 last:pb-0 space-y-2">
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
              </section>
            </Item>
            <Item key={"modal"} title={"Modal"}>
              <SectionHeader title={"Modal"} />
              <section className="pt-12 flex flex-wrap">
                <div className="pr-8 pb-8 space-y-2">
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
              </section>
            </Item>
          </TabsNav>
        </div>
      </main>
    </>
  )
}

const SectionHeader = ({ title }) => {
  return (
    <h1 className="text-4xl font-bold">
      {/* <h1 className="px-4 py-1 bg-blue-300 rounded-full w-fit text-lg font-semibold"> */}
      {title}
    </h1>
  )
}
