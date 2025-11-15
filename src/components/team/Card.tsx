import type { Person } from "@/lib/team-details";

export default function Card(props: {
	person: Person;
	type: "large" | "small";
}) {
	const { name, title, photo, github, linkedin } = props.person;
	const type = props.type;

	return (
		<section
			className={`flex ${type === "large" ? "w-80 px-8 flex-col gap-5" : "w-50 items-center gap-5 px-5"} bg-white border border-zinc-300 py-5 h-fit hover:shadow-2xl rounded-3xl m-3 select-none hover:-translate-y-5 transition-all ease-in-out duration-500`}
		>
			<section className="flex justify-center">
				<div
					className={`${type === "large" ? "w-50 h-50" : "w-20 h-20"} rounded-full overflow-hidden border border-zinc-500 shadow-[0px_10px_50px_0px_#00000050] pointer-events-none`}
				>
					<img className="object-fill w-full h-full" src={photo} alt={name} />
				</div>
			</section>

			<section className="">
				<p className="font-bold text-center">{name}</p>

				{/****  Show Linkedin and Github Details only if card type is large ****/}
				{type === "large" && (
					<span className="flex justify-between mt-2">
						<p>{title}</p>
						<span className="flex gap-3">
							{linkedin && (
								<a href={linkedin}>
									<img
										className="w-5 h-5 cursor-pointer transition-all ease-in-out hover:scale-120 active:scale-100 not-hover:grayscale"
										src="/team/linkedin.png"
										alt="Linkedin"
									/>
								</a>
							)}
							{github && (
								<a href={github}>
									<img
										className="w-5 h-5 cursor-pointer transition-all ease-in-out hover:scale-120 active:scale-100 not-hover:grayscale"
										src="/team/github.png"
										alt="Linkedin"
									/>
								</a>
							)}
						</span>
					</span>
				)}
			</section>
		</section>
	);
}
