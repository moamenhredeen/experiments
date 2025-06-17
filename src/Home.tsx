import {Component} from "solid-js";

const Home: Component = (props) => {

    return (
        <div class="max-w-[800px] mx-auto my-8 flex flex-col gap-8 items-center">
            <h1 class="text-4xl">Experiments</h1>
            <ul class="grid grid-cols-2 ">
                <li>
                    <a class="block bg-zinc-50 p-8 text-2xl hover:bg-amber-100 rounded-xl"
                       href="/event-handling-techniques/immediate">Event Handling Techniques</a>
                </li>
            </ul>
        </div>

    )
}

export default Home
