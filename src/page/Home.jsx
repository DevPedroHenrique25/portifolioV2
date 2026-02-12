import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCode, faLightbulb, faArrowTrendUp,faGlobe,faGear,faDatabase,faWrench } from "@fortawesome/free-solid-svg-icons";
import devforge from "../assets/devforge.jpg"
import lb from "../assets/lp.png"
import portifolio from "../assets/Portifolio.jpg"
import { faAlgolia,faReact,faJs,faPhp,faGitAlt,faGithub,faSearchengin,faWhatsapp,faLinkedin,faSquareGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home(){
    return(
        <div>
            <section data-aos="fade-up" style={{paddingTop:"100px"}} id="home" className="home">
                <div className="glow-effect glow-top-right"></div>
                <div className="glow-effect glow-bottom-right"></div>
                    <span>Desenvolvedor Web</span>
                    <h1>Desenvolvimento de Sites <br /> e Sistemas Web Modernos</h1>
                    <p>Soluções web sob medida, com foco em performance, segurança, organização e crescimento do seu negócio</p>  
                    <div style={{marginTop:"30px"}} className="btns-home">
                        <div className="orcamento"><a href="">Solicitar Orçamento </a></div>
                        <div className="see-projetos"><a href="#projetos">Ver Projetos</a></div>
                    </div>
                     <div className="arrow"><FontAwesomeIcon style={{color:"white"}} icon={faArrowDown} /></div>
            </section>

            <section data-aos="fade-up" id="sobre" className="sobre">
                    <h2>Quem sou eu?</h2>
                    <div className="content-sobre">
                        <p>Olá, me chamo Pedro Henrique, desenvolvedor web dedicado à criação de soluções digitais que fazem a diferença. Minha jornada é marcada pelo comprometimento com o aprendizado contínuo, a aplicação de boas práticas de desenvolvimento e a atenção à segurança das aplicações que construo.</p>
                        <p>Trabalho com foco em escrever código limpo, organizado, escalável e seguro. Cada projeto é uma oportunidade de crescimento técnico e de entregar valor real para meus clientes, transformando ideias em produtos web funcionais, profissionais e confiáveis.</p>
                        <div className="cards">

                            <div className="content-single">
                                <div style={{textAlign:"center",fontSize:"40px"}} className="icon-session"><FontAwesomeIcon style={{color:"rgba(2, 255, 87)"}} icon={faCode} /></div>
                                <p>Código limpo, com segurança e organizado</p>
                            </div> 
                            

                             <div className="content-single">
                                <div style={{textAlign:"center",fontSize:"40px"}} className="icon-session"><FontAwesomeIcon style={{color:"rgba(2, 255, 87)"}} icon={faLightbulb} /></div>
                                <p>Soluções criativas</p>
                            </div> 
                            
                             <div className="content-single">
                                <div style={{textAlign:"center",fontSize:"40px"}} className="icon-session"><FontAwesomeIcon style={{color:"rgba(2, 255, 87)"}} icon={faAlgolia} /></div>
                                <p>Foco em resultados</p>
                            </div> 

                             <div className="content-single">
                                <div style={{textAlign:"center",fontSize:"40px"}} className="icon-session"><FontAwesomeIcon style={{color:"rgba(2, 255, 87)"}} icon={faArrowTrendUp} /></div>
                                <p>Evolução contínua</p>
                            </div> 
                        </div>
                    </div>
            </section>

            <section id="servicos" className="servicos">
                <h2>Serviços</h2>

                <div data-aos="fade-up" className="container-servicos">
                    <div className="box-servicos blue">
                        <div  style={{background: "linear-gradient(to right, #3b82f6, #06b6d4)"}} className="img-box"><FontAwesomeIcon style={{color:"white"}} icon={faGlobe} /></div>
                        <h3>Criação de Sites Profissionais</h3>
                        <p>Sites institucionais, landing pages e portfólios responsivos com design moderno e otimizado para conversão.</p>
                    </div>

                    <div className="box-servicos pink">
                        <div style={{background: "linear-gradient(to right, #8b5cf6, #ec4899)"}} className="img-box"><FontAwesomeIcon icon={faGear} /></div>
                        <h3>Desenvolvimento de Sistemas Web</h3>
                        <p>Sistemas personalizados para controle, gestão e automação de processos do seu negócio.</p>
                    </div>

                    <div className="box-servicos green">
                        <div style={{background:"linear-gradient(to right, #10b981, #059669)"}} className="img-box"><FontAwesomeIcon style={{color:"white"}} icon={faWrench} /></div>
                        <h3>Manutenção e Evolução de Sites</h3>
                        <p>Correções, melhorias, novas funcionalidades e atualizações para manter seu site sempre atualizado..</p>
                    </div>

                    <div className="box-servicos orange">
                        <div style={{background:"linear-gradient(to right, #f97316, #eab308)"}} className="img-box"><FontAwesomeIcon style={{color:"white"}} icon={faSearchengin} /></div>
                        <h3>SEO e Performance</h3>
                        <p>Boas práticas para melhor posicionamento nos mecanismos de buscas e carregamento rápido das páginas.</p>
                    </div>
                </div>
            </section>

            <section id="projetos" className="projetos">
                <h2>Projetos</h2>
                <div data-aos="zoom-in" className="container-projetos">
                    <div className="projeto-single">
                        <div style={{ backgroundImage: `url(${devforge})` }}  className="img-projeto"></div>
                        <h3>Site Institucional</h3>
                        <p>Site institucional estratégico, desenvolvido para transformar visitantes em clientes, com design totalmente responsivo e performance otimizada para carregamento rápido.</p>
                        <span>React js</span>
                        <span>AOS js</span>
                        <span>Swiper js</span>
                        <span>CSS3</span>

                        <div style={{marginTop:"30px"}} className="btns-home">
                            <div className="orcamento"><a target="_blank" href="https://dev-forge-ebon.vercel.app/">Ver Detalhes</a></div>
                        </div>
                    </div>{/*projto-single*/}

                    <div className="projeto-single">
                        <div style={{ backgroundImage: `url(${lb})` }}  className="img-projeto"></div>
                        <h3>Landing Page</h3>
                        <p>Landing page estratégica focada em conversão, com design responsivo e carregamento rápido para máxima performance.</p>
                        <span>HTML5</span>
                        <span>JavaScript</span>
                        <span>CSS3</span>

                        <div style={{marginTop:"30px"}} className="btns-home">
                            <div className="orcamento"><a target="_blank" href="https://devpedrohenrique25.github.io/Empresa-Marketing-Site/">Ver Detalhes</a></div>
                        </div>
                    </div>{/*projto-single*/}


                     <div className="projeto-single">
                        <div style={{ backgroundImage: `url(${portifolio})` }}  className="img-projeto"></div>
                        <h3>Portifólio</h3>
                        <p>Portfólio pessoal desenvolvido para apresentar projetos e habilidades de forma estratégica, com design responsivo e carregamento rápido.</p>
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS3</span>
                        <span>AOS js</span>

                        <div style={{marginTop:"30px"}} className="btns-home">
                            <div className="orcamento"><a target="_blank" href="https://devpedrohenrique25.github.io/Portifolio/">Ver Detalhes</a></div>
                        </div>
                    </div>{/*projto-single*/}
                </div>{/*container-projetos*/}
            </section>


            <section className="tecnologias">
                <h2>Tecnologias</h2>
                <p>Ferramentas e tecnologias que utilizo no desenvolvimento</p>

                <div className="container-tec">
                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{color:"#61DBFB",fontSize:"40px"}} icon={faReact} /></div>
                        <span>React.js</span>
                    </div>

                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{fontSize:"40px", color:"#F7DF1E"}} icon={faJs} /></div>
                        <span>JavaScript</span>
                    </div>

                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{fontSize:"40px", color:"#F29111"}} icon={faDatabase} /></div>
                        <span>MySQL</span>
                    </div>

                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{fontSize:"40px", color:"#777BB4"}} icon={faPhp} /></div>
                        <span>PHP</span>
                    </div>

                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{fontSize:"40px", color:"#f14e32"}} icon={faGitAlt} /></div>
                        <span>GIT</span>
                    </div>

                    <div data-aos="flip-right" className="cards-tec">
                        <div className="icon-tec"><FontAwesomeIcon style={{fontSize:"40px", color:"#bbbfc4"}} icon={faGithub} /></div>
                        <span>GitHub</span>
                    </div>
                    
                </div>
            </section>

            <section className="banner">
                    <div data-aos="flip-up" className="banner-single">
                        <div className="glow-effect glow-top-right"></div>
                        <div className="glow-effect glow-bottom-right"></div>
                        <span>Pronto para começar?</span>
                        <h2>Vamos tirar sua ideia do <br /> papel?</h2>
                        <p>Transforme sua visão em realidade. Entre em contato e vamos conversar sobre como posso ajudar seu negócio a crescer na web.</p>
                        <div className="btn-banner">
                            <div className="wpp"><a href="">Falar no WhatsApp</a></div>
                        </div>
                    </div>
            </section>{/*banner*/}

            <section id="contato" className="contato">
                <div data-aos="flip-down" className="contato-single">
                    <h2>Redes Sociais</h2>
                    <p>Conecte-se comigo nas redes sociais ou escolha seu canal preferido de comunicação.</p>


                <div className="btn-single">
                    <div style={{backgroundColor:"oklch(62.7% 0.194 149.214)"}} className="icon-contato"><FontAwesomeIcon style={{fontSize:"40px",color:"white"}} icon={faWhatsapp}/></div>
                    <a href="https://wa.me/5524992129512"target="_blank"rel="noopener noreferrer">WhatsApp</a>
                </div>{/*Btn-single*/}

                <div className="btn-single">
                    <div style={{backgroundColor:"oklch(54.6% 0.245 262.881)"}} className="icon-contato"><FontAwesomeIcon style={{fontSize:"40px",color:"white"}} icon={faLinkedin} /></div>
                    <a href="https://www.linkedin.com/in/pedro-henrique-39148b2a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>{/*Btn-single*/}

                <div className="btn-single">
                    <div style={{backgroundColor:"oklch(44.6% 0.03 256.802)"}} className="icon-contato"><FontAwesomeIcon style={{fontSize:"40px",color:"white"}} icon={faSquareGithub} /></div>
                    <a href="https://github.com/DevPedroHenrique25" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>{/*Btn-single*/}

                    
                </div>{/*contato-single*/}
            </section>


                  {/* Botão WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5524992129512"
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>


           
        </div>
    )
}