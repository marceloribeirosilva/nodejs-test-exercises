# Node.js and Infrastructure Exercises

This repository contains solutions for a set of technical exercises. Each exercise demonstrates a different aspect of Node.js programming and infrastructure management using Terraform.

## Table of Contents

- [Exercise 1: Vowel Count Function](#exercise-1-vowel-count-function)
- [Exercise 2: RESTful API](#exercise-2-restful-api)
- [Exercise 3: Bash Script](#exercise-3-bash-script)
- [Exercise 4: Terraform Auto Scaling Group](#exercise-4-terraform-auto-scaling-group)

## Exercise 1: Vowel Count Function

A Node.js function that receives a string and a callback function. It counts the number of vowels in the string and passes the result to the callback.

### Usage

```javascript
import countVowels from './vowelCounter.js';

countVowels('Hello World', (vowelCount) => {
  console.log(`Number of vowels: ${vowelCount}`);
});
```

## Exercise 2: RESTful API

A RESTful API using Express.js with endpoints to perform CRUD operations on a list of items. This API interacts with an external API (PokéApi) and includes unit and integration tests using Jest and Supertest.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/marceloribeirosilva/nodejs-test-exercises.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start:**

   ```bash
   npm start
   ```   

   The API will be accessible at `http://localhost:3000`.

## Endpoints

The API provides the following endpoints:

- **GET /items**
  - Retrieve all items from the PokéApi.

- **GET /items/:id**
  - Retrieve a single item by ID from the PokéApi.

- **POST /items**
  - Create a new item.

- **PUT /items/:id**
  - Update an existing item by ID.

- **DELETE /items/:id**
  - Delete an item by ID.

## Unit Tests

  ```bash
    npm test
  ```
  Run the following command to execute unit tests.

## Integration Tests

  ```bash
   npm run test:integration
  ```
  Integration tests are included to verify the functionality of API endpoints.

## Swagger

The Swagger will be accessible at `http://localhost:3000/api-docs/`.

# Exercise 3: Bash Script

This repository contains a Bash script that copies all files with the extension ".txt" from a directory named "origem" to a directory named "destino". It ensures that the "destino" directory exists before copying the files and displays a success message upon completion.

## Usage

1. **Run the Bash script**

   ```bash
   ./copiar_txt.sh
   ```

## Bash Script Details

The Bash script performs the following steps:

- **Checks if the "destino" directory exists:**
  - Before copying the files, the script verifies if the "destino" directory exists.

- **Creates the "destino" directory if it does not exist:**
  - If the "destino" directory does not exist, the script creates it using `mkdir -p destino`.

- **Copies all .txt files from the "origem" directory to the "destino" directory:**
  - The script iterates through all `.txt` files in the "origem" directory and copies them to the "destino" directory using `cp origem/*.txt destino/`.

- **Displays a success message after copying the files:**
  - After successfully copying the files, the script prints a message indicating the operation's completion.

# Exercise 4: Terraform Auto Scaling Group

This repository includes a Terraform configuration file that sets up an Auto Scaling Group on Amazon Web Services (AWS). The configuration ensures that the Auto Scaling Group uses the latest Amazon Machine Image (AMI), is deployed in a specific availability zone, and implements an auto-scaling policy to adjust the number of instances based on system load.

## Terraform Details

The Terraform configuration file (`terraform.tf`) defines the following resources and settings:

- **Auto Scaling Group (ASG):**
  - Configures the Auto Scaling Group to use the latest available AMI and deploy instances in a specific AWS availability zone.

- **Launch Configuration:**
  - Defines the launch configuration with specifications for instance type, security groups, and other settings required by the Auto Scaling Group.

- **Auto Scaling Policies:**
  - Implements auto-scaling policies to dynamically adjust the number of instances based on metrics like CPU utilization or request count.

- **Networking and Security:**
  - Sets up networking configurations such as VPC, subnets, and security groups needed for the instances.

## Requirements

- AWS CLI configured with appropriate credentials and permissions.
- Terraform CLI installed on your machine.

