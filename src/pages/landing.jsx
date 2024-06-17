
import { useEffect, useState } from "react";
import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/todoContainer";
import TodoList from "../components/todolist";
import { useLocation } from "react-router-dom";

function Landing() {
    const data = useLocation();
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedDateTime = dateTime.toLocaleString();

    return (
        <div className="bg-[#909E84] p-16 max-md:p-6">
            <div className="bg-white p-10 rounded-md">
                <Header name={data.state.user}></Header>
                <div className="flex justify-between gap-7 my-5 flex-wrap">
                    <Card bgColor={"#BB8644"} title={"Location"} subtitle={"Chennai"}></Card>
                    <Card bgColor={"#75654C"} title={"Date & Time"} subtitle={formattedDateTime}></Card>
                    <Card bgColor={"#E3D477"} title={"Built Using"} subtitle={"React"}></Card>
                </div>
                <TodoContainer></TodoContainer>
            </div>
        </div>
    );
}

export default Landing;
