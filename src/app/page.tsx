import Image from 'next/image'
import { Colors } from "./_components/colors/colors";
import { Button } from "./_components/button";
import { HomeHeroSection } from "./_components/home-hero-section/home-hero-section";
import { CourseSummary } from "@/types/course-summary.interface";
import { CourseCardList } from "./(courses)/_components/course-card-list";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourses(4);
  return (
    <>
      <HomeHeroSection />
      <section className="container pt-20">
        <div className="text-center xl:text-right font-extrabold">
          <h2>تازه ترین دوره های آموزشی</h2>
          <p>برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
