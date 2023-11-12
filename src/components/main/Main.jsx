

export default function Main() {
   
   return (
      <div className="main">
         <p>{localStorage.token ? 'Hello, user!' : 'Please, login!'}</p>
      </div>
   );
}