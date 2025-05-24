import { useEffect, useState } from "react";

function Step1({ onDataChange, formData, validate }) {

  const [errorData, setErrorData] = useState("")
   
  const [localData, setLocalData] = useState({
    age: formData.age || "",
    job: formData.job || "",
    email: formData.email || "",
    cusname: formData.cusname || "",
    phone: formData.phone || "",
    location: formData.location || "",
    lunchBudget: formData.lunchBudget || "",
  });
  const phoneNumber = String(formData.phone).split("")
  const phoneLength = phoneNumber.length
  const startWithZero = phoneNumber[0]
  const typeNumber = Number(phoneNumber.join(""))
  useEffect(() => {
    if (formData.age !== "" &&
      formData.job !== "" &&
      formData.email !== "" &&
      formData.cusname !== "" &&
      formData.location !== "" &&
      formData.lunchBudget !== "" && phoneLength === 10 && startWithZero === "0"  && typeNumber >0) {
      validate(true)
    } else {
      validate(false)
    }
    if(formData.cusname === ""){
      setErrorData("Bồ chưa nhập tên")
    }
    else if(formData.age === ""){
      setErrorData("Bồ chưa nhập tuổi")
    }
    else if(phoneLength === 0){
      setErrorData("Bồ chưa nhập số điện thoại")
    }
    else if(startWithZero !== "0"){
      setErrorData("Số điện thoại phải bắt đầu bằng 0")
    }
    else if(phoneLength !== 10){
      setErrorData("Số điện thoại phải là 10 ký tự")
    }
    else if(!typeNumber){
      setErrorData("Số điện thoại không bao gồm chữ")
    }
    else if(formData.email === ""){
      setErrorData("Bồ chưa nhập Email")
    }
    else if(formData.job === ""){
      setErrorData("Bồ chưa nhập Nghề nghiệp")
    }
    else if(formData.location === ""){
      setErrorData("Bồ chưa nhập địa chỉ")
    }
    else if(formData.lunchBudget === ""){
      setErrorData("Bồ chưa nhập chi phí cho buổi trưa")
    }
    else {
      setErrorData("")
    }
    if (JSON.stringify(localData) !== JSON.stringify(formData)) {
      onDataChange(localData);
    }
  }, [localData, formData]);

 
  return (
   <>
    <div className="space-y-4">
      <h2 className="text-lg font-bold border-2 border-[#FF6600] p-5 rounded-md bg-[#FF6600] text-center text-while">
        Basic Profile
      </h2>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ vui lòng cho tui biết tên nhé?
        </label>
        <input
          required
          type="text"
          name="cusname"
          value={localData.cusname}
          onChange={(e) => setLocalData({ ...localData, cusname: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ bao nhiêu tuổi?
        </label>
        <div className="flex justify-start items-center gap-2">
          {['18 – 24', '25 – 34', '35 – 44', '45 +'].map((option) => (
            <label key={option} className="flex items-center gap-1 w-full">
              <input
                required
                type="radio"
                name="age"
                value={option}
                checked={localData.age === option}
                onChange={(e) => setLocalData({ ...localData, age: e.target.value })}
                className="border-2 border-gray p-2 rounded focus:bg-[#FCDA8A] focus:border-[#E6A300] outline-none text-[#60230D] text-sm font-bold"
              />
              <span className="w-full text-sm text-[#60230D]">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
     
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Số điện thoại của Bồ để tui chăm sóc tốt hơn
        </label>
        <input
          required
          type="text"
          name="phone"
          value={localData.phone}
          onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
         <span>{
          }</span>
      </div>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Cho tui email của Bồ nha
        </label>
        <input
          required
          type="email"
          name="email"
          value={localData.email}
          onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>
      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Nghề nghiệp của Bồ là gì?
        </label>
        <input
          required
          type="text"
          name="job"
          value={localData.job}
          onChange={(e) => setLocalData({ ...localData, job: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sống ở khu vực nào? (Quận, thành phố)
        </label>
        <input
          required
          type="text"
          name="location"
          value={localData.location}
          onChange={(e) => setLocalData({ ...localData, location: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <div>
        <label className="block text-md font-bold text-[#60230D] mb-3">
          Bồ sẵn sàng chi bao nhiêu cho bữa trưa?
        </label>
        <input
          required
          type="text"
          name="lunchBudget"
          value={localData.lunchBudget}
          onChange={(e) => setLocalData({ ...localData, lunchBudget: e.target.value })}
          className="w-full border-2 border-gray p-2 rounded focus:bg-[#FF6600] focus:border-[#FF6600] focus:text-white outline-none text-[#60230D] text-sm font-bold"
        />
      </div>

      <span className="text-bold text-sm text-red-800">{errorData}</span>
    </div>
   </>
  );
}

export default Step1;