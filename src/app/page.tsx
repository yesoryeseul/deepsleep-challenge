'use client';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { handleCreateUser, handleSearchingUser } from './action';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  return (
    <main className="relative bg-yellow-50 w-full h-screen">
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="absolute right-1/2 top-1/2 min-w-[720px] w-1/3 rounded-md min-h-[600px] h-1/2 p-10 translate-x-[50%] translate-y-[-50%] bg-purple-100">
        <div className="bg-white w-full h-full flex">
          <div className="w-1/2">
            <div className="text-center text-3xl font-bold pt-3">회원 등록</div>
            <div>
              <form action={handleCreateUser} className="flex flex-col p-4 gap-4 items-end">
                <label className="border-black w-full border-2 p-2 flex gap-2">
                  <span className="w-32">회원이름 :</span>
                  <input name="user_name" className="focus:outline-none w-full" />
                </label>
                <label className="border-black w-full border-2 p-2 flex gap-2">
                  <span className="w-32">이메일 :</span>
                  <input name="user_email" className="focus:outline-none w-full" />
                </label>
                <label className="border-black w-full border-2 p-2 flex gap-2">
                  <span className="w-32">카카오톡 :</span>
                  <input name="user_kakao" className="focus:outline-none w-full" />
                </label>
                <label className="border-black border-2 w-full p-2 flex gap-2">
                  <span>분야 :</span>
                  <label className="flex gap-2">
                    <input type="radio" name="user_major" value="백엔드" />
                    백엔드
                    <input type="radio" name="user_major" value="프론트엔드" />
                    프론트엔드
                  </label>
                </label>
                <label className="border-black border-2 p-2 w-full  flex-col gap-2">
                  <div className="w-36">자기소개서 :</div>
                  <textarea name="user_intro" className="focus:outline-none w-full" />
                </label>
                <button className="w-16 text-white rounded-md bg-pink-400 p-2">등록</button>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <div className="text-center text-3xl font-bold pt-3">회원 조회</div>
            <div>
              <form action={handleSearchingUser} className="flex flex-col p-4 gap-4 items-end">
                <label className="border-black border-2 p-2 flex gap-2">
                  <span className="w-32">회원이름 :</span>
                  <input name="user_name" className="focus:outline-none w-full" />
                </label>
                <label className="border-black border-2 p-2 flex gap-2">
                  <span className="w-32">카카오톡 :</span>
                  <input name="user_kakao" className="focus:outline-none w-full" />
                </label>
                <button className="w-16 text-white rounded-md bg-pink-400 p-2">찾기</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
