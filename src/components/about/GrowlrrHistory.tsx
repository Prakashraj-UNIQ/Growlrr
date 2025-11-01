import TimelineItem from "../ui/TimelineItem";

export default function GrowlrrHistory() {
    return (
        <section className="bg-white dark:bg-gray-800 transition-colors duration-500">
            <div className="w-full mx-auto px-4 sm:px-12 lg:px-25 flex flex-col items-center justify-center py-24 lg:py-12 relative p-8">
                <div className="prose  text-gray-800 prose-sm prose-headings:font-normal prose-headings:text-xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold dark:text-white">
                            <span className="text-brandOrange">Grow</span><span className="text-brandBlue">lrr</span> — Brief History
                        </h1>
                        <p className="text-balance text-gray-600 dark:text-gray-300 mt-2">
                            From lab bench to bowl — the journey to science-driven, rotation-based nutrition.
                        </p>
                    </div>
                </div>

                <div className="mt-12 w-full">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200">
                        <div className="grid grid-cols-1 gap-8 overflow-hidden lg:grid-cols-4">
                            {/* 2019–2021 Foundations */}
                            <TimelineItem
                                year="2019–2021"
                                title="Foundations"
                                desc="R&D across veterinary nutrition and food engineering. Prototyped single-species, organ-forward pouches and validated safety workflows."
                            />

                            {/* 2022 Architecture */}
                            <TimelineItem
                                year="2022"
                                title="Nutritional Architecture"
                                desc="Evolved from static “complete formula” to a modular rotation system, fortified by precision premixes to align with AAFCO/FEDIAF across the week."
                            />

                            {/* 2023 Scale */}
                            <TimelineItem
                                year="2023"
                                title="Scale & Systems"
                                desc="OEM partnerships with export-grade plants. Built subscription flows and the digital diet-chart engine to personalize rotation plans."
                            />

                            {/* 2024–2025 Today */}
                            <TimelineItem
                                year="2024–2025"
                                title="Growlrr Today"
                                desc="Human-grade, retort-sterilized pouches for shelf stability and traceability. AAFCO/FEDIAF-aligned rotation. Petness app beta + subscription pilots."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}