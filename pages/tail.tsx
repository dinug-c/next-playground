import { useTheme } from "next-themes"
import { SunIcon,MoonIcon } from "@heroicons/react/24/solid"
import { useState, useEffect } from "react";
import Image from "next/image";
import myPic from "../public/profile.jpg";

export default function tail() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const renderThemeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <SunIcon className="w-10 h-10 text-yellow-500" role="button" onClick={() => setTheme('light')} />
            )
        } else {
            return (
                <MoonIcon className="w-10 h-10 text-gray-900" role="button" onClick={() => setTheme('dark')} />
            )
        }
    };
    const changeTheme = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }
  return (
    <div className="mt-1 dark:bg-slate-800 dark:text-slate-200">
        <h1 className="mx-3 my-3 text-4xl font-bold text-center">Tailwind <span className="text-transparent bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text">Playground</span></h1>
        <section className="bg-gradient-to-tr from-blue-200 via-orange-300 to-purple-500">
            <h2>Spacing</h2>
            <div className="m-4">Margin</div>
        </section>

        <section className="max-w-full mx-8 mt-8 min-h-fit">
            <h2 className="my-1 text-2xl font-bold ">Penggunaan Tailwind pada Framework Next.js</h2>
            <p className="my-1">By <span className="italic font-medium">Resma Adi Nugroho</span>, 24 April 2023</p>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt consectetur rerum facilis aliquid voluptatum officia, autem ipsum praesentium aspernatur? Sed sunt sint in nulla architecto quisquam corrupti, nam vero.</p>
            <p className="my-2 font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi inventore ad alias officiis illo aliquam assumenda autem voluptas possimus accusantium non itaque repudiandae, voluptate praesentium nihil dolor tenetur rerum ullam.</p>
            <p className="my-2 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, ducimus beatae facere aperiam nisi delectus suscipit dolores mollitia cum consectetur, sapiente doloribus dolor quis quibusdam quaerat, eligendi quas similique labore.</p>
        </section>

        <div className="max-w-xl mx-auto mt-[42px] h-96 bg-[#bada55] card-tail overflow-y-scroll bg-fixed mb-20">
            <p className="p-5 text-3xl">Sky is Beautiful</p>
            <p className="p-5 text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis hic id, cumque cum placeat quis suscipit deserunt eligendi atque, iusto quaerat sit. Adipisci quidem quos, ipsa culpa quae provident tempora esse earum commodi? Laboriosam inventore asperiores nulla ea dolor dignissimos, est consequatur, sequi doloribus fugiat eius necessitatibus architecto assumenda. Atque nesciunt odit nam in ab suscipit nobis quod fugit consequuntur ipsa, nihil iure tempore voluptas veritatis! Libero natus quasi sunt quia dignissimos impedit tempore nisi dolor, debitis hic inventore cumque voluptatum dolorum consectetur labore praesentium, harum incidunt obcaecati itaque ullam sapiente! Ullam sapiente veritatis sed praesentium dolores fugit reprehenderit voluptatibus minus, mollitia reiciendis ad, doloribus consequatur earum, unde autem! Ratione aliquid eius obcaecati libero labore, voluptatum suscipit inventore cum, laboriosam quidem eveniet atque perspiciatis ab at. At amet omnis adipisci sapiente iste aspernatur ipsa animi nisi reiciendis accusantium neque explicabo nam placeat labore incidunt, perferendis distinctio nesciunt. Cupiditate, inventore error dolores nemo eum voluptatem blanditiis earum dolorum quae ratione obcaecati nostrum ipsum expedita consectetur temporibus fugiat atque voluptatibus dicta et quod, dolore libero. Impedit dolorem praesentium dicta optio inventore est expedita, saepe corrupti sit qui esse quibusdam? Soluta, alias tempore excepturi nisi itaque atque illo amet consectetur voluptate sunt!</p>
        </div>
        
        <div className="flex max-w-xl mx-auto mt-32 mb-20 bg-center bg-no-repeat bg-contain shadow-sm rounded-2xl h-96 bg-slate-300 card-tail">
            <div className="w-20 h-20 m-auto bg-white rounded opacity-20 backdrop-blur-2xl"></div>
        </div>

        <hr className="py-12"/>

        <div className="flex justify-center">
            {renderThemeChanger()}
        </div> 

        <button className="block px-5 py-2 mx-auto my-10 font-semibold text-white rounded-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:ring-1 focus:ring-sky-300">
            Get Started
        </button>

        <div className="max-w-lg p-5 mx-auto my-10 border shadow-md group hover:bg-sky-400 border-slate-200 rounded-xl">
            <h5 className="mb-3 text-lg font-bold text-slate-700 group-hover:text-white">Contoh Card</h5>
            <p className="text-slate-600 group-hover:text-white selection:bg-yellow-300 selection:text-slate-900 first-letter:text-5xl first-letter:float-left first-letter:mr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corporis ratione, eius sit minus ipsum quaerat animi rem, nostrum voluptatum debitis. Illo magnam incidunt tempore quis earum omnis pariatur quo.</p>
        </div>

        <div className="max-w-lg p-5 mx-auto border rounded-md shadow-md border-slate-300">
            <form action="">
                <label>
                    <span className="block mb-1 font-semibold text-slate-700 after:content-['*'] after:text-pink-500 after:ml-1">Email</span>
                    <input type="email" id="email" placeholder="Masukan email.." className="w-full px-3 py-2 text-sm border rounded shadow placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"/>
                    <p className="invisible m-1 text-sm text-pink-700 peer-invalid:visible">Email tidak valid</p>
                </label>
            </form>
        </div>

        <hr className="my-20"/>

        <div className="w-40 h-40 mx-auto transition scale-50 rounded-lg shadow-lg hover:rotate-45 hover:scale-100 bg-sky-500 hover:bg-purple-600"></div>
        <div className="w-40 h-40 mx-auto group">
            <div className="w-full h-full transition duration-300 ease-in-out scale-50 rounded-lg shadow-lg bg-sky-500 group-hover:rotate-45 group-hover:scale-100"></div>
        </div>
        <div className="w-10 h-10 mx-auto mt-20 bg-pink-500 rounded-lg shadow-lg bgpink animate-bounce"></div>

        <hr className="my-20 border-t-4"/>

        <div className="container px-5 mx-auto">
            <div className="relative p-10 border rounded-lg shadow-lg">
                <div className="fixed flex w-10 h-10 rounded-full cursor-pointer bg-sky-200 bottom-5 right-5"><a className="m-auto text-3xl font-bold text-sky-600" href="#">↑</a></div>
                <Image src={myPic} alt="profile" width={150} className="float-left mr-5"></Image>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad aliquid dolores quos at natus voluptatum saepe. Eligendi consectetur voluptas accusamus nemo similique, nostrum et, error esse iste aperiam rerum minus natus praesentium sit porro temporibus velit necessitatibus. Temporibus ipsum numquam eligendi suscipit, modi earum obcaecati facilis a sit natus.</p>
            </div>
        </div>

        <div className="container p-10 mx-auto my-20 border rounded-lg shadow-lg columns-3">
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
            <img src="https://source.unsplash.com/600x400?nature" alt="Image" className="mb-4"/>
        </div>

        <hr className="my-24 border-t-4"/>

        <div className="container max-w-md px-6 pb-20 mx-auto sm:max-w-xl">
            <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl">Newt<span className="text-sky-500">.dev</span></h3>
            <Image src={myPic} alt="profile" width={150} className="object-cover w-full h-32 mt-4 shadow-xl rounded-xl sm:mt-6 sm:h-64 sm:w-full sm:object-center"></Image>
            <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-3xl">Newt personal portofolio programming</h2>
            <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus rem repudiandae doloribus, magni, explicabo sint repellat ex quos ad reprehenderit placeat? Dicta architecto hic, soluta repellat totam illum vitae a.</p>
            <div className="mt-4 sm:mt-6 ">
                <a href="#" className="inline-block px-5 py-3 font-semibold text-white rounded-full shadow-lg bg-sky-500 sm:text-base">Follow</a>
            </div>
        </div>
    </div>
  )
}
