import React from 'react'
import styles from '../styles'

export const BlogPost2 = ({title='',time='',coverPic=''}) => {
  return (
    <div className='bg-dark-900 py-12 px-[20%] space-y-8'>
      <h1 className={styles.h3}>{title}</h1>
      <p className={styles.p2}>{time} Read</p>
      <img 
        src={coverPic}
        alt="Blog cover photo"
        className={`h-[30rem] object-cover`}
       />
      {/* add the dynamic content here */}
       <div className={`${styles.p2} space-y-8`}>

        <p >
          <span className={`${styles.h4Heavy}`}>Cybersecurity</span> is a battlefield where hidden adversaries launch silent attacks, and digital detectives are tasked with uncovering their tracks. Just like a detective in a crime scene, a cybersecurity investigator must approach each alert with a vigilant and methodical mindset. In this blog, we’ll explore the art of thinking like a detective while investigating cybersecurity alerts, focusing on the critical phase of Reconnaissance.
        </p>

        <div className='space-y-2'>
          <p className={`${styles.p1Heavy}`}>Understanding the Investigation Process</p>
          <p>
            In the world of cybersecurity, investigations are akin to solving intricate puzzles. They are necessary when a security alert is triggered, indicating a potential security breach. The primary goal of an investigation is to understand what happened, how it happened, and what can be done to prevent it from happening again.
          </p>
        </div>

       </div>
        
        
        {/* 
        



Reconnaissance: The First Step in Investigation
Reconnaissance is the initial and perhaps the most crucial phase of a cybersecurity investigation. It’s during this phase that you gather information about the potential threat, laying the foundation for the entire investigation. Here are the key steps in the Reconnaissance phase:

1. Alert Identification: Begin by understanding the alert that triggered the investigation. What kind of alert is it, and where did it originate? Is it a false positive or a genuine threat?

2. Collecting Indicators of Compromise (IOCs): To think like a detective, gather valuable IOCs such as IP addresses, file hashes, domain names, and suspicious URLs associated with the alert.

3. Victim Analysis: Determine who or what was affected by the alert. Was it a specific user, server, or application? This information helps in assessing the potential impact.

4. Event Timeline: Create a timeline of events leading up to and following the alert. Understanding the sequence of events can provide valuable context.

5. Affected Systems: Identify which systems were involved, compromised, or targeted. Knowing the extent of the breach is essential.

6. Network Traffic Analysis: Analyze network traffic logs to understand the flow of data and potential intrusion points.

Open-Source Tools for Investigation
Investigating cybersecurity alerts can be challenging, but open-source tools can significantly aid in the process. Here are a few tools and how to use them in a nutshell:

Wireshark: Analyze network traffic to identify anomalies or suspicious patterns.
Bro/Zeek: A powerful network security monitor for real-time network analysis and protocol detection.
Snort: An intrusion detection system (IDS) that can detect and prevent network intrusion attempts.
ELK Stack (Elasticsearch, Logstash, Kibana): A combination used for log and event data analysis.
MISP (Malware Information Sharing Platform & Threat Sharing): A tool for sharing structured threat information.
IOCs to Collect During Investigation
While in the Reconnaissance phase, collecting Indicators of Compromise (IOCs) is crucial. These are pieces of information that suggest malicious activity. Common IOCs include:

IP Addresses: Suspicious or known malicious IP addresses.
Hash Values: Hashes of files, documents, or executables associated with the alert.
Domain Names: Suspicious or malicious domain names linked to the threat.
URLs: Web addresses that may be involved in the attack.
Email Addresses: Any suspicious or known malicious email addresses used in the attack.
By gathering and analyzing these IOCs, you can build a profile of the threat, making it easier to track, attribute, and respond effectively.

In cybersecurity investigations, thinking like a detective is a valuable skill. The Reconnaissance phase is the critical first step that lays the groundwork for the entire investigation. By collecting the right IOCs and using open-source tools, you’ll be well on your way to uncovering the mystery behind every alert and keeping your digital realm secure. Stay tuned for more insights on the subsequent phases of a cybersecurity investigation!
         */}
    </div>
  )
}
