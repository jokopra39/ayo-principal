var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var monthIDNNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

export const pause = async (param: number = 3000) => {
  await browser.pause(param)
}

export const frameHome = async () => {
  await browser.pause(10000)
  await browser.switchToFrame(0)
  await browser.pause(10000)
}

export const frameForm = async () => {
  await browser.switchToParentFrame()
  await browser.pause(10000)
  await browser.switchToFrame(0)
  await browser.pause(10000)
}

export const selectRadio = async (form: any, value: string | number) => {
  for (const radio of await form) {
    const element = await radio.getValue()
    if (element === value) {
      await radio.click()
      break
    }
  }
}

export const setText = async (form: any, text: string | number) => {
  await form.setValue(text)
}

export const setDropdown = async (form: any, value: string | number) => {
  for (const [index, span] of await form.entries()) {
    const element = await span.getText()
    if (value == element.toString()) {
      await click(form[index])
      break
    }
  }
  await pause()
}

export const setDropdownCheckbox = async (form: any, checkbox: any, value: any) => {
  for (const [index, span] of await form.entries()) {
    const element = await span.getText()
    console.log(element)
    if (value.includes(String(element))) {
      await click(checkbox[index])
    }
  }
  await pause()
  await browser.keys("Escape")
}

export const click = async (button: any) => {
  await button.click()
}

export const setDate = async ({ AwalOrAkhir, TPOrNot = 'not', ProposalOrNot = 'not' }: { AwalOrAkhir: string; TPOrNot?: string; ProposalOrNot?: string }) => {
  var date = new Date()
  if (ProposalOrNot == "PROPOSAL") {
    date = new Date(date.setDate(date.getDate() + 1))
  }
  if (AwalOrAkhir == "AWAL") {
    if (TPOrNot == "TP") {
      return date.getDate() + " " + monthIDNNames[date.getMonth()] + " " + date.getFullYear()
    } else {
      return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
  } else {
    const nextThreeDays = new Date(date.setDate(date.getDate() + 3))
    if (TPOrNot == "TP") {
      return nextThreeDays.getDate() + " " + monthIDNNames[nextThreeDays.getMonth()] + " " + nextThreeDays.getFullYear()
    } else {
      return monthNames[nextThreeDays.getMonth()] + " " + nextThreeDays.getDate() + ", " + nextThreeDays.getFullYear()
    }
  }

}

export const setTime = async (
  formStartTime: any,
  formEndTime: any
) => {
  await formStartTime.click()
  await pause()
  await $$(
    '[class="clock-face__number clock-face__number--outer ng-star-inserted"]'
  )[0]
    .$("span")
    .click() // maksud dari [0] adalah jam = 1. Ini untuk jam 1-12 pagi
  await pause()
  await $$('[class="timepicker-button"]')[1].click()
  await pause()

  await formEndTime.click()
  await pause()
  await $$(
    '[class="clock-face__number clock-face__number--inner ng-star-inserted"]'
  )[10]
    .$("span")
    .click() // maksud dari [10] adalah jam = 11. Ini Untuk jam 1-12 malam
  await pause()
  await $$('[class="timepicker-button"]')[1].click()
  await pause()
}
// ============================================================================================

export const setStartEndDate = async (
  formStartDate: any,
  formEndDate: any,
  popUpCalendar: any
) => {
  await formStartDate.click()
  await pause()
  await popUpCalendar.$$("tr")[2].$$("td")[5].$("div").click() //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause()

  await formEndDate.click()
  await pause()
  await popUpCalendar.$$("tr")[4].$$("td")[4].$("div").click() //contoh: 4,6: 29 Januari 2022
  await pause()
}

export const setStartEndDateTime = async (
  formStartDate: any,
  formEndDate: any,
  popUpCalendar: any,
  formStartTime: any,
  formEndTime: any
) => {
  await formStartDate.click()
  await pause()
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click() //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause()

  await formStartTime.click()
  await pause()
  await $$(
    '[class="clock-face__number clock-face__number--outer ng-star-inserted"]'
  )[0]
    .$("span")
    .click() // maksud dari [0] adalah jam = 1. Ini untuk jam 1-12 pagi
  await pause()
  await $$('[class="timepicker-button"]')[1].click()
  await pause()

  await formEndDate.click()
  await pause()
  await popUpCalendar.$$("tr")[3].$$("td")[2].$("div").click() //contoh: 4,6: 29 Januari 2022
  await pause()

  await formEndTime.click()
  await pause()
  await $$(
    '[class="clock-face__number clock-face__number--inner ng-star-inserted"]'
  )[10]
    .$("span")
    .click() // maksud dari [10] adalah jam = 11. Ini Untuk jam 1-12 malam
  await pause()
  await $$('[class="timepicker-button"]')[1].click()
  await pause()
}

export const setStartEndDateTP = async (
  formStartDate: any,
  formEndDate: any,
  popUpCalendar: any
) => {
  await formStartDate.click()
  await pause()
  await popUpCalendar.$$("tr")[3].$$("td")[0].$("div").click() //baris x kolom, contoh: 1,4: 6 Januari 2022
  await pause()

  await formEndDate.click()
  await pause()
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click() //contoh: 4,6: 29 Januari 2022
  await pause()
}

export const setEndDate = async (
  formDate: any,
  popUpCalendar: any
) => {
  await formDate.click()
  await pause()
  await popUpCalendar.$$("tr")[3].$$("td")[1].$("div").click() //contoh: 4,6: 29 Januari 2022
  await pause()
}
