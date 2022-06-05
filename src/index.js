import React from 'react'
import { createRoot } from 'react-dom/client'

class MyForm extends React.Component{
    constructor(props){
        super(props)

        // Inisiasi
        this.state = {
            nama: "",
            email: "",
            gender: ""
        }

        //Binding
        this.inputPerubahanNama = this.inputPerubahanNama.bind(this)
        this.inputPerubahanEmail = this.inputPerubahanEmail.bind(this)
        this.inputPerubahanGender = this.inputPerubahanGender.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    inputPerubahanNama(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                nama: event.target.value
            }
        })
    }
    
    inputPerubahanEmail(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                email: event.target.value
            }
        })
    }

    inputPerubahanGender(event){
        this.setState((previousState) => {
            return {
                ...previousState,
                gender: event.target.value
            }
        })
    }

    onSubmitHandler(event){
        // Menghentikan aksi default dari tombol submit
        event.preventDefault()

        const message = `
                Nama: ${this.state.nama},
                Email: ${this.state.email},
                Jenis Kelamin: ${this.state.gender}
            `
        alert(`Apakah benar berikut data anda \n ${message}`)
    }

    render(){
        return (
            <div class="container-lg">
                <h1>FORM REGISTRASI</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="nama" aria-describedby="emailHelp" value={this.state.nama} onChange={this.inputPerubahanNama} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="text" class="form-control" id="email" value={this.state.email} onChange={this.inputPerubahanEmail} required />
                    </div>
                    <div class="mb-3">
                        <label for="gender" class="form-label">Jenis Kelamin</label>
                        <select class="form-select" aria-label="Default select example" id='gender' value={this.state.gender} onChange={this.inputPerubahanGender}>
                            <option selected>-- Pilih Jenis Kelamin --</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const root = createRoot(document.getElementById("root"))
root.render(<MyForm />)