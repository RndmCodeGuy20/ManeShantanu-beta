import Image from "next/image";
import Head from "next/head";

import homeStyles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Shantanu Mane | RndmCodeGuy20</title>
                <meta
                    name={"description"}
                    content={"Shantanu Mane's personal website"}
                />
                <link rel="icon" type="image/x-icon" href="nuclear.svg"/>
            </Head>

            <div className={homeStyles.main_body}>
                <div className={homeStyles.body_text}>
                    {/*<div className={homeStyles.line_1}>I don’t suffer from insanity</div>*/}
                    {/*<div className={homeStyles.line_2}>— I enjoy every minute of it.</div>*/}
                    I don’t suffer from insanity... <br/> &emsp;&emsp;I enjoy every minute of it.
                </div>
                <div className={homeStyles.projects_btn}>
                    <div className={homeStyles.projects_btn_name}>
                        {/*<a href="know-me.html">know me!</a>*/}
                        know me!
                    </div>
                </div>
            </div>
            <div className={homeStyles.secondary_body}>
                <div className={homeStyles.primary_box}>
                    <img src="cool_design.svg" alt={"cool"}/>
                </div>
                <div className={homeStyles.secondary_box}>
                    <div className={homeStyles.orange_box}>
                    </div>
                    <div className={homeStyles.design_box}>
                    </div>
                </div>
            </div>
            <div className={homeStyles.secondary_body_text} style={{textAlign: "center", display: 'flex'}}>
                <el style={{color: "#FF7622",}}>WA</el>
                NNABE ENGINEER
            </div>
            <div className={homeStyles.black_design}>
                <img src="design.svg" alt=""/>
            </div>
            <div className={homeStyles.black_design_long} style={{background: 'url(./design_long.svg) repeat-x'}}>
            </div>
        </div>
    )
}
