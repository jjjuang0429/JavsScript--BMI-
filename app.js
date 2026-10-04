// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方
const bodyHeight = document.querySelector("#bodyHeight")
const bodyWeight = document.querySelector("#bodyWeight")
const btncount = document.querySelector("button")
const result = document.querySelector("#resultText")

// 算出BMI
btncount.addEventListener("click", () => {
  const height = Number(bodyHeight.value) / 100
  const weight = Number(bodyWeight.value)
  const bmi = weight / (height * height)

  //  把if也放入括號內才能同樣使用bmi來做判讀
  let message
  if (bmi < 18.5) {
    message = "瘦巴巴"
  } else if (bmi >= 18.5 && bmi < 24) {
    message = "健康寶寶"
  } else {
    message = "胖豬豬"
  }

  result.textContent = `${bmi.toFixed(1)}\n${message}`
  // 使用toFix(1)來取到小數點第1位
})
