import Link from "next/link";

export const HomeScreen = () => {
    return (
        <main align='center'>
            <p>Hi, it's me!</p>
            <h2>Syed Kashan Ali Shah!</h2>

            <Link href='/contact'>Contact me</Link>
            <p className="description">
                email me at: <a href='mailto:kashanshah@hotmail.com'>kashanshah@hotmail.com</a>
            </p>
            <p className="description">
                check: <a href='/docs/resume-syed-kashan-ali-shah.pdf'>my resume</a>
            </p>
        </main>
    )
}
