<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3>Member Registration Page</h3>
            <form>
                <div class="mb-3">
                    <label for="InputName" class="form-label">User Name </label>
                    <input type="name" name="name" class="form-control" id="InputName">
                </div>
                <div class="mb-3">
                    <label for="InputEmail" class="form-label">User Email </label>
                    <input type="email" name="email" class="form-control" id="InputEmail">
                </div>
                <div class="mb-3">
                    <label for="InputPassword" class="form-label">User Password</label>
                    <input type="password" class="form-control" id="InputPassword">
                </div>
                <div class="mb-3">
                    <label for="InputComPassword" class="form-label">Confirmed Password</label>
                    <input type="password" name="conpassword" class="form-control" id="InputComPassword">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>
<script setup></script>
<style scoped></style>