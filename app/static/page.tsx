"use client"

export default function Component() {
  const onFinish = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      username: formData.get('username'),
      password: formData.get('password') 
    };
    console.log('Success:', values);
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/socialmedia-5a9a9.appspot.com/o/Desktop%20-%201.png?alt=media&token=6369acf7-e872-4739-8616-b22968a3984f')`,
      }}
      className="bg-cover h-screen w-full flex flex-col justify-center items-center"
    >
      <h1 className="text-purple-400 text-4xl font-bold">
        Vibezone
      </h1>
      <h1 className="text-purple-400 text-3xl font-bold mt-12">
        Sign In
      </h1>
      
      <form onSubmit={onFinish} className="flex flex-col items-center mt-6 ">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border border-gray-600 rounded-lg px-4 py-2 w-[300px] text-white bg-black mb-[20px]"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-600 rounded-lg px-4 py-2 w-[300px] text-white bg-black mb-[20px]"
        />

        <button
          type="submit"
          className="bg-purple-400 text-white h-[40px] w-[300px] mt-[20px] border-2 rounded-lg hover:bg-purple-500"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
