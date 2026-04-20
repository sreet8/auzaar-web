import { useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Home as HomeIcon } from 'lucide-react';

export default function PageNotFound() {
    const location = useLocation();
    const pageName = location.pathname.substring(1);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-obsidian relative overflow-hidden">
            <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
            <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, rgba(2,6,23,0) 60%)" }}
            />
            <div className="relative max-w-md w-full text-center">
                <div className="mono-label text-primary mb-6">ERROR · 404</div>
                <h1 className="font-display text-6xl lg:text-7xl font-bold text-white tracking-tight">Not found</h1>
                <div className="h-px w-16 bg-primary/60 mx-auto my-6" />
                <p className="text-muted-foreground leading-[1.6]">
                    The page <span className="text-white font-mono text-sm">/{pageName}</span> does not exist in this application.
                </p>

                {import.meta.env.DEV && (
                    <div className="mt-8 p-4 rounded-lg border border-ember/30 bg-ember/5 text-left">
                        <div className="mono-label text-ember">DEV NOTE</div>
                        <p className="mt-2 text-sm text-foreground/85">
                            This route is not defined in <span className="font-mono text-xs">App.jsx</span>.
                        </p>
                    </div>
                )}

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link to="/" className="btn-shimmer group inline-flex items-center gap-1.5 px-5 py-3 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 kinetic-ease transition-all glow-cobalt">
                        <HomeIcon className="h-4 w-4" /> Go home
                    </Link>
                    <Link to="/request-demo" className="group inline-flex items-center gap-1.5 px-5 py-3 rounded-md bg-white/[0.03] text-white text-sm font-medium border border-border/80 hover:bg-white/[0.06] kinetic-ease transition-all">
                        Request a demo <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 kinetic-ease transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
