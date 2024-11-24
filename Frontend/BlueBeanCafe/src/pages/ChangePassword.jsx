const ChangePassword = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="max-w-screen-md w-full flex flex-col justify-center h-screen">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="text-2xl font-bold font-serif dark:text-yellow-500">
            Change Password
          </div>
          <form className="mt-10 flex flex-col h-full w-full px-8 md:p-0 md:w-2/4 gap-4">
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">
                Old Password
              </label>
              <input
                placeholder="Old Password"
                type="password"
                id="old-password"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded p-1 px-2 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-serif font-semibold text-sm ">
                New Password
              </label>
              <input
                placeholder="New Password"
                id="new-password"
                type="password"
                className="border-2 dark:border-yellow-300 text-black border-gray-900 rounded text-sm p-1 px-2"
              />
            </div>
            <div className="w-full mt-1">
              <button
                onClick={(e) => e.preventDefault()}
                className="rounded mt-2 w-full p-3 text-sm bg-yellow-500 text-black font-semibold right-0 font-serif hover:bg-yellow-400 active:bg-yellow-500"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
