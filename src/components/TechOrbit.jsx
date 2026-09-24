import "../styles/styles.css";
import {
    FaReact,
    FaPython,
    FaGitAlt,
    FaNodeJs,
    FaDocker,
    FaDatabase,
    FaCode,
} from "react-icons/fa";
import {
    SiJavascript,
    SiPostgresql,
    SiDjango,
    SiTailwindcss,
    SiTypescript,
    SiNextdotjs,
    SiMongodb,
    SiVite,
} from "react-icons/si";


const techIcons = [
    { Icon: FaReact, top: "12%", left: "8%", size: 42, delay: "0s", color: "#61DAFB" },
    { Icon: SiJavascript, top: "28%", left: "82%", size: 36, delay: "-3s", color: "#F7DF1E" },
    { Icon: SiDjango, top: "58%", left: "5%", size: 40, delay: "-6s", color: "#0C4B33" },
    { Icon: SiPostgresql, top: "78%", left: "18%", size: 34, delay: "-2s", color: "#4169E1" },
    { Icon: FaPython, top: "68%", left: "88%", size: 38, delay: "-9s", color: "#3776AB" },
    { Icon: SiTailwindcss, top: "42%", left: "45%", size: 30, delay: "-4s", color: "#06B6D4" },
    { Icon: FaGitAlt, top: "8%", left: "58%", size: 34, delay: "-7s", color: "#F05032" },
    { Icon: SiMongodb, top: "88%", left: "62%", size: 32, delay: "-1s", color: "#47A248" },
    { Icon: SiNextdotjs, top: "18%", left: "35%", size: 28, delay: "-5s", color: "#000000" },
    { Icon: SiTypescript, top: "52%", left: "72%", size: 30, delay: "-8s", color: "#3178C6" },
    { Icon: FaNodeJs, top: "35%", left: "18%", size: 30, delay: "-10s", color: "#339933" },
    { Icon: SiVite, top: "82%", left: "40%", size: 26, delay: "-3.5s", color: "#646CFF" },
    { Icon: FaDocker, top: "22%", left: "68%", size: 32, delay: "-11s", color: "#2496ED" },
    { Icon: FaDatabase, top: "62%", left: "32%", size: 30, delay: "-6.5s", color: "#0F5132" },
    { Icon: FaCode, top: "92%", left: "78%", size: 28, delay: "-12s", color: "#6C63FF" },
];

const TechOrbit = () => {
    return (
        <div className="tech-orbit" aria-hidden="true">
            {techIcons.map(({ Icon, top, left, size, delay, color }, i) => (
                <span
                    key={i}
                    className="tech-icon"
                    style={{
                        top,
                        left,
                        width: size,
                        height: size,
                        animationDelay: delay,
                        color,
                    }}
                >
                    <Icon />
                </span>
            ))}
        </div>
    );
};

export default TechOrbit;