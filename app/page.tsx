export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <h1 className="my-5">Not going to lie, this parish mission is going to be 🔥</h1>
     <p className="my-5">You should totally sign up!</p>
     <form action="">
      <input className="my-5 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit" value="Sign up!"/>
     </form>
    </main>
  );
}