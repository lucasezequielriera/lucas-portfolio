import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import type { ParsedCv } from "@/lib/cv-generator";

export type CvTemplate = "ats-clean" | "modern-recruiter" | "executive-onepage";

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingHorizontal: 34,
    fontSize: 10.5,
    color: "#0F172A",
    fontFamily: "Helvetica",
    lineHeight: 1.45,
  },
  headerWrap: {
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E1",
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: "#0B1220",
    letterSpacing: 0.2,
  },
  contactRow: {
    marginTop: 6,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contactText: {
    fontSize: 9.5,
    color: "#334155",
  },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 11,
    color: "#0B1220",
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
    paddingBottom: 3,
  },
  bodyText: {
    fontSize: 10,
    color: "#1E293B",
  },
  bulletRow: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    marginBottom: 3,
    paddingRight: 4,
  },
  bulletDot: {
    fontSize: 10,
    color: "#0EA5E9",
    marginTop: -1,
  },
  bulletText: {
    fontSize: 10,
    color: "#1E293B",
    flex: 1,
  },
  skillsWrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  skillBadge: {
    fontSize: 9,
    color: "#0F172A",
    backgroundColor: "#E2E8F0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 999,
  },
});

const templateTokens: Record<
  CvTemplate,
  {
    pageBg: string;
    text: string;
    heading: string;
    border: string;
    accent: string;
    chipBg: string;
    chipText: string;
    nameSize: number;
  }
> = {
  "ats-clean": {
    pageBg: "#FFFFFF",
    text: "#1E293B",
    heading: "#0B1220",
    border: "#CBD5E1",
    accent: "#0EA5E9",
    chipBg: "#E2E8F0",
    chipText: "#0F172A",
    nameSize: 22,
  },
  "modern-recruiter": {
    pageBg: "#F8FAFC",
    text: "#1F2937",
    heading: "#111827",
    border: "#94A3B8",
    accent: "#2563EB",
    chipBg: "#DBEAFE",
    chipText: "#1E3A8A",
    nameSize: 24,
  },
  "executive-onepage": {
    pageBg: "#FFFFFF",
    text: "#111827",
    heading: "#0A0A0A",
    border: "#A8A29E",
    accent: "#0F766E",
    chipBg: "#CCFBF1",
    chipText: "#134E4A",
    nameSize: 23,
  },
};

function BulletList({ items, accentColor }: { items: string[]; accentColor: string }) {
  return (
    <View>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={[styles.bulletDot, { color: accentColor }]}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

export function CvPdfDocument({
  cv,
  template = "ats-clean",
}: {
  cv: ParsedCv;
  template?: CvTemplate;
}) {
  const token = templateTokens[template];

  return (
    <Document
      title={`${cv.name} - ATS Resume`}
      author={cv.name}
      subject="ATS-friendly resume"
      keywords={cv.skills.join(", ")}
    >
      <Page size="A4" style={[styles.page, { backgroundColor: token.pageBg }]}>
        <View style={[styles.headerWrap, { borderBottomColor: token.border }]}>
          <Text
            style={[styles.name, { color: token.heading, fontSize: token.nameSize }]}
          >
            {cv.name}
          </Text>
          <View style={styles.contactRow}>
            {cv.email ? (
              <Text style={[styles.contactText, { color: token.text }]}>{cv.email}</Text>
            ) : null}
            {cv.phone ? (
              <Text style={[styles.contactText, { color: token.text }]}>{cv.phone}</Text>
            ) : null}
            {cv.location ? (
              <Text style={[styles.contactText, { color: token.text }]}>{cv.location}</Text>
            ) : null}
            {cv.linkedin ? (
              <Link style={[styles.contactText, { color: token.accent }]} src={cv.linkedin}>
                LinkedIn
              </Link>
            ) : null}
            {cv.github ? (
              <Link style={[styles.contactText, { color: token.accent }]} src={cv.github}>
                GitHub
              </Link>
            ) : null}
            {cv.website ? (
              <Link style={[styles.contactText, { color: token.accent }]} src={cv.website}>
                Portfolio
              </Link>
            ) : null}
          </View>
        </View>

        {cv.summary ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Professional Summary
            </Text>
            <Text style={[styles.bodyText, { color: token.text }]}>{cv.summary}</Text>
          </View>
        ) : null}

        {cv.skills.length ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Core Skills
            </Text>
            <View style={styles.skillsWrap}>
              {cv.skills.map((skill) => (
                <Text
                  key={skill}
                  style={[
                    styles.skillBadge,
                    { backgroundColor: token.chipBg, color: token.chipText },
                  ]}
                >
                  {skill}
                </Text>
              ))}
            </View>
          </View>
        ) : null}

        {cv.experience.length ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Experience
            </Text>
            <BulletList items={cv.experience} accentColor={token.accent} />
          </View>
        ) : null}

        {cv.projects.length ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Selected Projects
            </Text>
            <BulletList items={cv.projects} accentColor={token.accent} />
          </View>
        ) : null}

        {cv.education.length ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Education
            </Text>
            <BulletList items={cv.education} accentColor={token.accent} />
          </View>
        ) : null}

        {cv.certifications.length ? (
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: token.heading, borderBottomColor: token.border },
              ]}
            >
              Certifications
            </Text>
            <BulletList items={cv.certifications} accentColor={token.accent} />
          </View>
        ) : null}
      </Page>
    </Document>
  );
}
