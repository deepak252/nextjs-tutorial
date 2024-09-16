function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 m-2 shadow-lg">
      {children}
    </div>
  );
}

export default Card;
