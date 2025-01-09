import {useEffect,useRef} from 'react'
import {TESTIMONIAL} from "../constants";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const testimonialRef = useRef(null);

    useEffect(()=>{
            const ctx = gsap.context(()=>{
                gsap.from(".testimonial-item",{
                    opacity: 0,
                    y: 30,
                    scale: 0.5,
                    duration: 1.5,
                    ease: "power3.out",
                    delay:0.3,                    
                    scrollTrigger:{
                        trigger:testimonialRef.current,
                        start:"top 80%",
                        toggleActions:"play none none none",
                    }
                })
            },testimonialRef)
            return () => ctx.revert();
        },[])
  return (
    <section id="testimonial" className="py-16" ref={testimonialRef}>
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">Testimonial</h2>
        <div className="px-4">
            <div className=" testimonial-item flex flex-col items-center text-center ">
                <img src={TESTIMONIAL.image} alt={TESTIMONIAL.name}
                className="mb-6 h-24 w-24 rounded-full border-4 object-cover"/>
                <blockquote className="max-w-xl text-lg leading-relaxed lg:text-2xl">
                    &quot;{TESTIMONIAL.quote}&quot;
                </blockquote>
                <div className=" testimonial-item mt-4 text-lg ">
                    <p>{TESTIMONIAL.name}</p>
                    <p className="text-sm">{TESTIMONIAL.title}</p>
                </div>
            </div>
        </div>
    </section>
  )
}


export default Testimonials