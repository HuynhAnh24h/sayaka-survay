import { Step1, Success } from "./components";
import { useState, useCallback, useMemo} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userId: localStorage.getItem("tracking_user_id") || ""
  });
  const logo = "https://img.freepik.com/premium-vector/eagle-logo-design_104950-95.jpg?w=360"
  const [isSuccess, setIsSuccess] = useState(false);
  const [validate, setValidate] = useState(false)
  const [countTracking, setCount] = useState(1);
  const handleDataChange = useCallback((newData) => {
    setFormData((prev) => {
      // Kiểm tra nếu có ít nhất một key thay đổi
      const hasChanges = Object.keys(newData).some((key) => prev[key] !== newData[key]);

      if (!hasChanges) return prev; // Nếu không có thay đổi, giữ nguyên state
      return { ...prev, ...newData };
    });

  }, []);

  // Trạng thái xác nhận form hợp lệ
  // const nextStep = useCallback(() => {
  //   setStep((prev) => Math.min(prev + 1, 6));
  //   setCount(prev => prev + 1);
  //   setStepAction("next");
  // }, []);

  // const prevStep = useCallback(() => {
  //   switch (step) {
  //     case 1:
  //       const phoneNumber = String(formData.phone).split("")
  //       const phoneLength = phoneNumber.length
  //       const startWithZero = phoneNumber[0]
  //       const typeNumber = Number(phoneNumber.join(""))
  //       if (formData.age !== "" &&
  //           formData.job !== "" &&
  //           formData.email !== "" &&
  //           formData.cusname !== "" &&
  //           formData.location !== "" &&
  //           formData.lunchBudget !== "" && phoneLength === 10 && startWithZero === "0" && typeNumber > 0) {
  //         setValidate(true)
  //       } else {
  //         setValidate(false)
  //       }
  //       break
  //   }
  //   setStep((prev) => Math.max(prev - 1, 1));
  //   setStepAction("back");
  // }, []);

  const handleSubmit = async () => {
    toast.success("Gửi thành công!");
    setIsSuccess(true);
    setFormData({});
    if(formData.suggestedImprovement === ""){
      formData.suggestedImprovement = "Không trả lời"
    }
    if(formData.brandDifference === ""){
      formData.brandDifference = "Không trả lời"
    }
    try {
      console.log(formData)
      // const response = await fetch("https://member.sayaka.vn/api/survey", {
      //   method: "POST",
      //   body: JSON.stringify(formData), // Gửi dữ liệu đã xử lý
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      // setStepAction("submit");
      // if (!response.ok) {
      //   const errorText = await response.text();
      //   console.log(errorText)
      // }
    } catch (error) {
      console.error("Lỗi khi gửi yêu cầu:", error);
    }
  };

  return (
    <>
    <div className="mx-auto h-auto flex flex-col justify-center items-center bg-amber-50]">
      <div className="max-w-md bg-white rounded-md shadow-sm p-10 flex flex-col items-center justify-start">
        <div className="flex justify-center items-center mb-5">
          <div className="w-[150px] h-[150px]">
            <img src={logo} className="w-full h-full" alt="Logo" />
          </div>
        </div>
        {isSuccess ? (
          <div>
            <Success/>
          </div>
        ) : (
          <div>
            <Step1 onDataChange={handleDataChange} formData={formData} validate={setValidate} />
            <div className="mt-4 flex justify-between w-full">
                <button
                  onClick={handleSubmit}
                  disabled={!validate}
                  className={`uppercase font-bold text-white px-4 py-2 rounded ${validate ? "bg-[#584e33fb] hover:bg-[#FF6600] cursor-pointer" : "bg-gray-400 cursor-not-allowed"
                    }`}>
                  Gửi
                </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
    </>
  );
}

export default App;