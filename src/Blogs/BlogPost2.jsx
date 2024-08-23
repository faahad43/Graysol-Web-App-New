import React from 'react'
import styles from '../styles'

export const BlogPost2 = ({title='',time='',coverPic=''}) => {
  return (
    <div className='bg-light-900 py-12 px-[7%] md:px-[10%] lg:px-[15%] xl:px-[20%] space-y-8'>
      <h1 className={styles.h3Dark}>{title}</h1>
      <p className={styles.p2Dark}>{time} Read</p>
      <img 
        src={coverPic}
        alt="Blog cover photo"
        className={`md:h-[25rem] xl:h-[30rem] object-cover`}
       />
      {/* add the dynamic content here */}
       <div className={`${styles.p2Dark} space-y-8`}>

        <p >
        If you have a Python script that needs to run regularly on an online server, you may want to host it on an EC2 server and run it automatically on a cronjob.
        </p>

        <p>
        This allows you to easily automate tasks without having to manually run your script every time. In this article, we’ll go through the steps to host a Python script on an EC2 server and run it automatically on a cronjob.
        </p>

        <p>
        Before we get started, you’ll need to have an EC2 instance set up.
        </p>

        <p>
        For EC2 instance setup, follow this <a href='https://www.youtube.com/watch?v=3sQhVKO5xAA&list=LL&index=36' className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">youtube tutorial</a>. I will write a detailed article about it soon.
        </p>

        <p>
        Now these are prerequisites for the instance:
        </p>

        <ul className=' list-inside list-disc'>
          <li>An SSH client installed on your local machine to connect to the EC2 instance. This could be key-value pair file that you will get while creating an EC2 instance.</li>

          <li>
          Python and any necessary libraries installed on the EC2 instance
          </li>

          <li>
          A Python script that you want to run automatically
          </li>
        </ul>

        <p>
        With that out of the way, let’s get started!
        </p>

        {/* step 1 */}

        <div className='space-y-7'>
          <div className='space-y-2'>
            <h5 className={`${styles.h4HeavyDark}`}>Step 1: Connect to your EC2 instance using SSH</h5>
            <p>
            First, you’ll need to connect to your EC2 instance using SSH. You can do this by opening a terminal or command prompt on your local machine and entering the following command:
            </p>
          </div>
          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-x-hidden overflow-x-scroll'>
            <code>
            ssh -i &lt;path-to-aws-ec2-private-key&gt; ec2-user@&lt;public-ip-address&gt;
            </code>
          </pre>

          <p>
          Replace &lt;path-to-aws-ec2-private-key&gt; with the path to your AWS EC2 private key file, and &lt;public-ip-address&gt; with the public IP address of your EC2 instance.
          </p>
          <p>
          For example:
          </p>

          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-x-hidden overflow-x-scroll'>
            <code>
            ssh -i "insta-reels.pem" ec2-user@ec2-3-108-42-252.ap-south-1.compute.amazonaws.com
            </code>
          </pre>

        </div>
       
       {/* Step 2 */}
       <div className='space-y-7'>
          <div className='space-y-2'>
            <h5 className={`${styles.h4HeavyDark}`}>Step 2: Install Python and any necessary libraries</h5>
            <p>
            Once you’re connected to your EC2 instance, you’ll need to install Python and any necessary libraries that your script requires. You can do this using the package manager for your Linux distribution. For example, on Amazon Linux 2, you can use the following commands to install Python 3 and pip:
            </p>
          </div>
          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-hidden'>
            <code>

              sudo yum update -y <br />
              sudo yum install -y python3 <br />
              sudo yum install -y python3-pip
            </code>
          </pre>

          <p>
          You can then use pip to install any necessary Python libraries. For example, to install the requests library, you can run the following command or also install the requirements.txt file:
          </p>
          

          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-hidden'>
            <code>
            sudo pip3 install requests
            </code>
          </pre>

        </div>
       
        {/* Step 3 */}
        <div className='space-y-7'>
          <div className='space-y-2'>
            <h5 className={`${styles.h4HeavyDark}`}>Step 3: Upload your Python script to the EC2 instance</h5>
            <p>
            Next, you’ll need to upload your Python script to the EC2 instance. You can do this using GitHub.
            </p>
          </div>
          <p>
          Host your code on GitHub repository and then install git on EC2 instance
          </p>
          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-hidden'>
            <code>
            sudo yum update <br />
            sudo yum install git
            </code>
          </pre>

          <p>
          To pull a project from GitHub using Git in the terminal, follow these steps:
          </p>
          
          <ol className=' list-decimal list-outside ml-4 space-y-4'>
            <li>Change your working directory to the location where you want to clone the repository. You can use the <span className='bg-gray-100 p-1'>cd</span> command to navigate to the desired directory.</li>

            <li>
            Copy the URL of the repository you want to clone from the GitHub website.
            </li>
            
            <li>
            Run the following command in your terminal, replacing
&lt;repository-url&gt; with the URL you just copied:
            </li>
          </ol>

          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-x-hidden overflow-x-scroll'>
            <code>
            git clone https://github.com/pallets/pythonproject.git
            </code>
          </pre>

          <p>
          If the repository is private, you’ll be prompted to enter your GitHub username and password.
          </p>

          <p>
          Wait for the cloning process to complete. Once it’s finished, you’ll see a new directory in your current working directory with the same name as the repository you cloned.
          </p>

          <p>
          You can then pull the latest repo as well.
          </p>

        </div>
       

        {/* Step 4 */}
        <div className='space-y-7'>
          <div className='space-y-2'>
          <h5 className={`${styles.h4HeavyDark}`}>Step 4: Set up a cronjob to run your script automatically</h5>
          <p>
          Now that your Python script is uploaded to the EC2 instance, you can set up a cronjob to run it automatically at your desired intervals. To set up a cronjob, you can use the <pre className='inline p-1 bg-gray-100'>crontab</pre> command. For example, to run your script every day at 3:00am, you can run <pre className='inline p-1 bg-gray-100'>crontab -e</pre> to edit your crontab file and add the following line:
          </p>
          </div>
          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-hidden'>
            <code>
            0 3 * * * /usr/bin/python3 /home/ec2-user/myscript.py
            </code>
          </pre>

          <p>
          This will run your script every day at 3:00am. Make sure to replace <pre className='inline p-1 bg-gray-100'> /home/ec2-user/myscript.py</pre> with the actual path to your Python script
          </p>
        </div>

        {/* Step-5 */}
        <div>
          <div className='space-y-2'>
            <h4 className={`${styles.h4HeavyDark}`}>Step 5: Save your crontab file and exit the editor.</h4>
            <p>
            Once you’ve added your cronjob to the crontab file, save the file and exit the editor.
            </p>
          </div>
          
          <ul className='list-inside list-disc'>
              <li>
              Type this to save and exit vim editor:wq
              </li>

              <li>
              To check running cronjobs on the server crontab -l
              </li>

              <li>
              To check log of cronjobs:
              </li>
          </ul>

          <pre className='mt-6 mb-3 px-4 py-6 p rounded bg-gray-100 overflow-hidden'>
            <code>
            cat /var/spool/mail/ec2-user
            </code>
          </pre>
        </div>
       
        <h4 className={`${styles.h5HeavyDark} font-semibold pb-3`}>
        Just in case if your python code is written using selenium and it uses chrome browser, follow this tutorial to install chrome driver on linux terminal:
        </h4>
        <a href="https://www.cyberciti.biz/faq/howto-install-google-chrome-on-redhat-rhel-fedora-centos-linux/"
        target='_blank'
        className={`${styles.p2HeavyDark} underline-offset-2 underline`}
        >
          Install Google Chrome On a RHEL/CentOS 7/8 and Fedora Linux 34 Using Yum Command
        </a>

       </div>
        
        

    </div>
  )
}
