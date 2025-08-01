import ScrollFadeIn from '../ScrollFadeIn';
const AboutSection = () => {
  const skills = {
    "Core Stack": ["MERN Stack", "Node.js", "Express.js", "React Js", "Mongo DB"],
    "Programming & Web": ["Java Programming", "Python", "Html", "CSS", "Js", "Tailwind CSS"],
    "Tools & Platforms": ["Git & GitHub", "JWT", "Socket.io", "Docker", "Cloudinary", "Razorpay"]
  };
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <ScrollFadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
        </ScrollFadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <ScrollFadeIn delay={200}>
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="w-64 h-64 rounded-full overflow-hidden glass-card border-4 border-primary/30 neon-glow mx-auto lg:mx-0">
                  <img src="https://i.postimg.cc/kgMWbQJw/PSIZE-IMG.jpg" alt="Mopuri Saikumar Reddy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-4 border-2 border-accent/20 rounded-full animate-spin" style={{
                animationDuration: '20s'
              }} />
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={400}>
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Passionate Developer & Problem Solver</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated MERN Stack Developer with a passion for creating innovative digital experiences. 
                  My expertise lies in building secure, full-stack web applications with a focus on clean code, 
                  functionality, and exceptional user experience. I specialize in emerging technologies like AI 
                  integration and blockchain, constantly pushing the boundaries of what's possible in web development.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-accent">Skills & Technologies</h3>
                
                {Object.entries(skills).map(([category, skillList], index) => <ScrollFadeIn key={category} delay={600 + index * 100}>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-secondary">{category}</h4>
                      <div className="flex flex-wrap gap-3">
                        {skillList.map((skill, skillIndex) => <span key={skill} className="skill-tag" style={{
                      animationDelay: `${skillIndex * 0.1}s`
                    }}>
                            {skill}
                          </span>)}
                      </div>
                    </div>
                  </ScrollFadeIn>)}
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>;
};
export default AboutSection;