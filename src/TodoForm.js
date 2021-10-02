
const TodoForm = ({handleSubmit, onChange, formData}) => (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <label htmlFor="text" hidden>Text</label>
        <input 
            name="text"
            className="TodoForm-input"
            onChange={onChange}
            value={formData.todoText}
        />
        <button>Add Todo</button>
    </form>
)

export default TodoForm;